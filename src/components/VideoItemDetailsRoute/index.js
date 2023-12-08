import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  VideoDetailsMainContianer,
  VideoDetailsBodyContainer,
  VideosDetailsContainer,
  VideoContainer,
  VideoTitle,
  VideoInfoAndReactionContainer,
  ViewsAndTimePostedContainer,
  Views,
  TimePosted,
  ReactionsContainer,
  ReactionButton,
  ReactionText,
  HorizontalLine,
  ChannelContainer,
  ChannelLogo,
  ChannelName,
  ChannelInfo,
  SubscribeCount,
  Description,
  VideoTextInfoContainer,
  HomeLoadingContainer,
  HomeFailureViewContainer,
  FailureImage,
  FailureText,
  FailurePara,
  RetryButton,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const apiStatusConsts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FALIURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConsts.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConsts.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const videoUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(videoUrl, options)
    if (response.ok) {
      const videoDetails = await response.json()

      const videoData = videoDetails.video_details

      const updatedVideoData = {
        id: videoData.id,
        title: videoData.title,
        description: videoData.description,
        thumbnailUrl: videoData.thumbnail_url,
        videoUrl: videoData.video_url,
        viewCount: videoData.view_count,
        publishedAt: videoData.published_at,
        name: videoData.channel.name,
        profileimageUrl: videoData.channel.profile_image_url,
        subscriberCount: videoData.channel.subscriber_count,
      }

      this.setState({
        videoDetails: updatedVideoData,
        apiStatus: apiStatusConsts.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConsts.failure})
    }
  }

  renderVideoDetails = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark, addVideoToSavedVideos, removeSavedVideo} = value
        const {videoDetails, isLiked, isDisliked, isSaved} = this.state

        const {
          videoUrl,
          title,
          description,
          thumbnailUrl,
          viewCount,
          publishedAt,
          name,
          profileimageUrl,
          subscriberCount,
          id,
          videoSaved,
        } = videoDetails

        const onClickLike = () => {
          if (isDisliked) {
            this.setState(prevState => ({
              isLiked: !prevState.isLiked,
              isDisliked: false,
            }))
          } else {
            this.setState(prevState => ({
              isLiked: !prevState.isLiked,
            }))
          }
        }

        const onClickDislike = () => {
          if (isLiked) {
            this.setState(prevState => ({
              isDisliked: !prevState.isDisliked,
              isLiked: false,
            }))
          } else {
            this.setState(prevState => ({
              isDisliked: !prevState.isDisliked,
            }))
          }
        }

        const addOrRemoveVideo = () => {
          if (isSaved) {
            removeSavedVideo(id)
          } else {
            addVideoToSavedVideos({...videoDetails, videoSaved: true})
          }
        }

        const onClickSaved = () => {
          this.setState(
            prevState => ({isSaved: !prevState.isSaved}),
            addOrRemoveVideo,
          )
        }

        const customFormatOptions = {
          addSuffix: true, // Add "ago" or "in" to the end of the result
          includeSeconds: true, // Include seconds in the result
          // Other options you want to customize
        }

        const formatTime = formatDistanceToNowStrict(
          new Date(publishedAt),
          customFormatOptions,
        )

        const saveButtonText = isSaved ? 'Saved' : 'Save'
        const likedIconColor = isLiked ? '#2563eb' : '#64748b'
        const disLikedIconColor = isDisliked ? '#2563eb' : '#64748b'
        const saveIconColor = videoSaved ? '#2563eb' : '#64748b'

        return (
          <VideosDetailsContainer isDark={isDark}>
            <VideoContainer>
              <ReactPlayer url={videoUrl} controls height="100%" width="100%" />
            </VideoContainer>
            <VideoTextInfoContainer>
              <VideoTitle isDark={isDark}>{title}</VideoTitle>
              <VideoInfoAndReactionContainer>
                <ViewsAndTimePostedContainer>
                  <Views>{viewCount} views</Views>
                  <TimePosted>{formatTime}</TimePosted>
                </ViewsAndTimePostedContainer>
                <ReactionsContainer>
                  <ReactionButton type="button" onClick={onClickLike}>
                    <AiOutlineLike size={20} color={likedIconColor} />
                    <ReactionText isClicked={isLiked}>Like</ReactionText>
                  </ReactionButton>
                  <ReactionButton type="button" onClick={onClickDislike}>
                    <AiOutlineDislike size={20} color={disLikedIconColor} />
                    <ReactionText isClicked={isDisliked}>Dislike</ReactionText>
                  </ReactionButton>
                  <ReactionButton type="button" onClick={onClickSaved}>
                    <RiPlayListAddFill size={20} color={saveIconColor} />
                    <ReactionText isClicked={isSaved}>
                      {saveButtonText}
                    </ReactionText>
                  </ReactionButton>
                </ReactionsContainer>
              </VideoInfoAndReactionContainer>
              <HorizontalLine />
              <ChannelContainer>
                <ChannelLogo src={profileimageUrl} alt="channel logo" />
                <ChannelInfo>
                  <ChannelName>{name}</ChannelName>
                  <SubscribeCount>{subscriberCount} subscribers</SubscribeCount>
                  <Description isDark={isDark}>{description}</Description>
                </ChannelInfo>
              </ChannelContainer>
              <Description isDark={isDark} isMedium>
                {description}
              </Description>
            </VideoTextInfoContainer>
          </VideosDetailsContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

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
    this.getVideoDetails()
  }

  renderFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <HomeFailureViewContainer
            isDark={isDark}
            data-testid="videoItemDetails"
          >
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <FailureText isDark={isDark}>
              Oops! Something Went Wrong
            </FailureText>
            <FailurePara isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </HomeFailureViewContainer>
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
            <VideoDetailsMainContianer
              isDark={isDark}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoDetailsBodyContainer>
                <SideBar />
                {apiStatus === apiStatusConsts.success &&
                  this.renderVideoDetails()}
                {apiStatus === apiStatusConsts.inProgress &&
                  this.renderLoadingView()}
                {apiStatus === apiStatusConsts.failure &&
                  this.renderFailureView()}
              </VideoDetailsBodyContainer>
            </VideoDetailsMainContianer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
