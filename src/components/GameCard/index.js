import NxtwatchContext from '../../context/NxtwatchContext'

import {
  VideoItem,
  VideoLink,
  ThumbNailImage,
  VideoTextContainer,
  VideoTitle,
  ViewsAndTimePostedContainer,
  Views,
} from './styledComponents'

const GameCard = props => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark} = value

      const {videoDetails} = props

      const {thumbnailUrl, title, viewCount, id} = videoDetails

      return (
        <VideoItem>
          <VideoLink to={`/videos/${id}`}>
            <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoTextContainer>
              <VideoTitle isDark={isDark}>{title}</VideoTitle>
              <ViewsAndTimePostedContainer>
                <Views>{viewCount} Watching</Views>
                <Views>Worldwide</Views>
              </ViewsAndTimePostedContainer>
            </VideoTextContainer>
          </VideoLink>
        </VideoItem>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default GameCard
