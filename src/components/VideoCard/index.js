import {formatDistanceToNowStrict} from 'date-fns'

import NxtwatchContext from '../../context/NxtwatchContext'

import {
  VideoItem,
  VideoLink,
  ThumbNailImage,
  LogoTitleContainer,
  ChannelLogo,
  VideoTitle,
  ChannelNameAndVideoInfoContainer,
  ChannelName,
  ViewsAndTimePostedContainer,
  Views,
  TimePosted,
} from './styledComponents'

const VideoCard = props => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark} = value

      const {videoDetails} = props

      const {
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        channel,
        id,
      } = videoDetails
      const {name, profileimageUrl} = channel

      const customFormatOptions = {
        addSuffix: true, // Add "ago" or "in" to the end of the result
        includeSeconds: true, // Include seconds in the result
        // Other options you want to customize
      }

      const formatTime = formatDistanceToNowStrict(
        new Date(publishedAt),
        customFormatOptions,
      )

      return (
        <VideoItem>
          <VideoLink to={`/videos/${id}`}>
            <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
            <LogoTitleContainer>
              <ChannelLogo src={profileimageUrl} alt="channel logo" />
              <VideoTitle isDark={isDark}>{title}</VideoTitle>
            </LogoTitleContainer>
            <ChannelNameAndVideoInfoContainer>
              <ChannelName>{name}</ChannelName>
              <ViewsAndTimePostedContainer>
                <Views>{viewCount} views</Views>
                <TimePosted>{formatTime}</TimePosted>
              </ViewsAndTimePostedContainer>
            </ChannelNameAndVideoInfoContainer>
          </VideoLink>
        </VideoItem>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default VideoCard
