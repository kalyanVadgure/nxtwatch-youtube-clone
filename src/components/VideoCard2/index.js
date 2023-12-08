import {formatDistanceToNowStrict} from 'date-fns'
import NxtwatchContext from '../../context/NxtwatchContext'

import {
  VideoItem,
  VideoLink,
  ThumbNailImage,
  VideoTextContainer,
  LogoTitleContainer,
  ChannelLogo,
  VideoTitle,
  ChannelNameAndVideoInfoContainer,
  ChannelName,
  ViewsAndTimePostedContainer,
  Views,
  TimePosted,
} from './styledComponents'

const VideoCard2 = props => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark} = value

      const {videoDetails} = props

      const {
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        profileimageUrl,
        name,
        id,
      } = videoDetails

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
            <VideoTextContainer>
              <LogoTitleContainer>
                <ChannelLogo src={profileimageUrl} isMediumn />
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
              </LogoTitleContainer>
              <ChannelNameAndVideoInfoContainer>
                <ChannelName>{name}</ChannelName>
                <ViewsAndTimePostedContainer>
                  <Views>{viewCount} views</Views>
                  <TimePosted>{formatTime}</TimePosted>
                </ViewsAndTimePostedContainer>
              </ChannelNameAndVideoInfoContainer>
            </VideoTextContainer>
          </VideoLink>
        </VideoItem>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default VideoCard2
