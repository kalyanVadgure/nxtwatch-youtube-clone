import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {BiSearch} from 'react-icons/bi'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  HomeMainContianer,
  HomeBodyContainer,
  VideosListContainer,
  VideoList,
  SearchInputConatiner,
  SearchInput,
  SearchIconContainer,
  HomeLoadingContainer,
  HomeFailureViewContainer,
  FailureImage,
  FailureText,
  FailurePara,
  RetryButton,
  NotFoundContainer,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const apiStatusConsts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConsts.initial,
    videosList: [],
    searchInput: '',
    searchValue: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConsts.inProgress})

    const {searchValue} = this.state

    console.log(searchValue)

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`

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
        channel: {
          name: eachVideo.channel.name,
          profileimageUrl: eachVideo.channel.profile_image_url,
        },
      }))

      this.setState({
        videosList: updatedVideosList,
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
    this.getVideosList()
  }

  renderFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <HomeFailureViewContainer isDark={isDark} data-testid="home">
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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getVideosList)
  }

  onEnterSearchInput = event => {
    const {searchInput} = this.state

    if (event.key === 'Enter') {
      console.log(event.key)
      this.setState({searchValue: searchInput}, this.getVideosList)
    }
  }

  renderVideos = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {videosList, searchInput} = this.state
        const {isDark} = value

        const notFoundImage =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

        const showNotFound = videosList.length === 0

        return (
          <VideosListContainer isDark={isDark}>
            <SearchInputConatiner>
              <SearchInput
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                isDark={isDark}
              />
              <SearchIconContainer
                isDark={isDark}
                type="button"
                onClick={this.onClickSearchIcon}
                onKeyDown={this.onEnterSearchInput}
                data-testid="searchButton"
              >
                <BiSearch color="#7e858e" />
              </SearchIconContainer>
            </SearchInputConatiner>
            {showNotFound ? (
              <NotFoundContainer>
                <FailureImage src={notFoundImage} alt="no videos" />
                <FailureText isDark={isDark}>
                  No Search results found
                </FailureText>
                <FailurePara isDark={isDark}>
                  Try different key words or remove search filter
                </FailurePara>
                <RetryButton type="button">Retry</RetryButton>
              </NotFoundContainer>
            ) : (
              <VideoList>
                {videosList.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </VideoList>
            )}
          </VideosListContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  render() {
    const {apiStatus} = this.state

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeMainContianer isDark={isDark} data-testid="home">
              <Header />
              <HomeBodyContainer>
                <SideBar />
                {apiStatus === apiStatusConsts.success && this.renderVideos()}
                {apiStatus === apiStatusConsts.failure &&
                  this.renderFailureView()}
                {apiStatus === apiStatusConsts.inProgress &&
                  this.renderLoadingView()}
              </HomeBodyContainer>
            </HomeMainContianer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Home
