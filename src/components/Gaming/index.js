import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideBar from '../SideBar'
import GameCard from '../GameCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  HomeMainContianer,
  HomeBodyContainer,
  VideosListContainer,
  VideoList,
  HomeLoadingContainer,
  HomeFailureViewContainer,
  FailureImage,
  FailureText,
  FailurePara,
  RetryButton,
  PageNameContainer,
  IconContainer,
  PageName,
  PageNameAndContentContainer,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const apiStatusConsts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FALIURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConsts.initial,
    gamingList: [],
  }

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    this.setState({apiStatus: apiStatusConsts.inProgress})

    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data.videos)
      const {videos} = data

      const updatedVideosList = videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      console.log(updatedVideosList)

      this.setState({
        gamingList: updatedVideosList,
        apiStatus: apiStatusConsts.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConsts.failure})
    }
  }

  renderLoadingView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <HomeLoadingContainer isDark={isDark} data-testid="loader">
            <Loader type="ThreeDots" color="blue" height={50} width={50} />
          </HomeLoadingContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  onClickRetry = () => {
    this.getGamingList()
  }

  renderFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <HomeFailureViewContainer isDark={isDark} data-testid="gaming">
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure view"
            />
            <FailureText isDark={isDark}>
              Oops! Something Went Wrong
            </FailureText>
            <FailurePara isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again
            </FailurePara>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </HomeFailureViewContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderVideos = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {gamingList} = this.state
        const {isDark} = value

        return (
          <VideosListContainer isDark={isDark}>
            <VideoList>
              {gamingList.map(eachVideo => (
                <GameCard key={eachVideo.id} videoDetails={eachVideo} />
              ))}
            </VideoList>
          </VideosListContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderPageNameContainer = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <PageNameContainer isDark={isDark}>
            <IconContainer isDark={isDark}>
              <SiYoutubegaming size={40} color="#ff031c" />
            </IconContainer>
            <PageName isDark={isDark}>Gaming</PageName>
          </PageNameContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value
          const {apiStatus} = this.state

          return (
            <HomeMainContianer isDark={isDark} data-testid="gaming">
              <Header />
              <HomeBodyContainer>
                <SideBar />
                <PageNameAndContentContainer>
                  {this.renderPageNameContainer()}
                  {apiStatus === apiStatusConsts.success && this.renderVideos()}
                  {apiStatus === apiStatusConsts.inProgress &&
                    this.renderLoadingView()}
                  {apiStatus === apiStatusConsts.failure &&
                    this.renderFailureView()}
                </PageNameAndContentContainer>
              </HomeBodyContainer>
            </HomeMainContianer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Trending
