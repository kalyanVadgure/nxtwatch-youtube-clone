import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {RiPlayListAddFill} from 'react-icons/ri'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard2 from '../VideoCard2'

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
  NotFoundContainer,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const apiStatusConsts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SavedVideos extends Component {
  state = {
    apiStatus: apiStatusConsts.success,
  }

  componentDidMount() {}

  getSavedVideosList = async () => {
    this.setState({apiStatus: apiStatusConsts.inProgress})

    const url = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileimageUrl: eachVideo.channel.profile_image_url,
      }))

      console.log(updatedVideosList)

      this.setState({
        savedVideosList: updatedVideosList,
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

  renderFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <HomeFailureViewContainer isDark={isDark}>
            <FailureImage src={failureImage} alt="failure" />
            <FailureText isDark={isDark}>
              Oops! Something Went Wrong
            </FailureText>
            <FailurePara isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again
            </FailurePara>
            <RetryButton type="button">Retry</RetryButton>
          </HomeFailureViewContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderVideos = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value

        console.log(savedVideos)

        const notFoundImage =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'

        const showNotFound = savedVideos.length === 0

        return (
          <VideosListContainer isDark={isDark}>
            {showNotFound ? (
              <NotFoundContainer>
                <FailureImage src={notFoundImage} alt="no saved videos" />
                <FailureText isDark={isDark}>No Saved videos found</FailureText>
                <FailurePara isDark={isDark}>
                  Save your videos by clicking a button,You can save videos
                  while watching them
                </FailurePara>
              </NotFoundContainer>
            ) : (
              <VideoList>
                {savedVideos.map(eachVideo => (
                  <VideoCard2 key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </VideoList>
            )}
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
              <RiPlayListAddFill size={35} color="#ff031c" />
            </IconContainer>
            <PageName isDark={isDark}>Saved Videos</PageName>
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

          return (
            <HomeMainContianer isDark={isDark} data-testid="savedVideos">
              <Header />
              <HomeBodyContainer>
                <SideBar />
                <PageNameAndContentContainer>
                  {this.renderPageNameContainer()}
                  {this.renderVideos()}
                </PageNameAndContentContainer>
              </HomeBodyContainer>
            </HomeMainContianer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default SavedVideos
