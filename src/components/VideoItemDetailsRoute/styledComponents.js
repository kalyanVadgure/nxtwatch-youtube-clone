import styled from 'styled-components'

export const VideoDetailsMainContianer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
`

export const VideoDetailsBodyContainer = styled.div`
  display: flex;
`

export const VideosDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};

  @media screen and (min-width: 768px) {
    width: 85vw;
    padding: 10px;
  }
`

export const VideoContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    width: 95%;
    height: 500px;
    padding: 10px 20px 10px 20px;
  }
`

export const VideoTextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 80px 10px 20px;
`

export const VideoTitle = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  font-size: 20px;
`

export const VideoInfoAndReactionContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ReactionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ReactionButton = styled.button`
  background-color: transparent;
  border: none;
  color: #475569;
  font-size: 15px;
  display: flex;
  align-items: center;
`

export const ReactionText = styled.p`
  color: ${props => (props.isClicked ? '#4f46e5' : '#475569')};
  margin-left: 8px;
  font-weight: 500;
  font-size: 20px;
`

export const ViewsAndTimePostedContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Views = styled.p`
  color: #475569;
  font-weight: 500;
  font-size: 20px;
  margin: 0px 14px 0px 14px;

  @media screen and (min-width: 768px) {
    margin: 0px 8px 0px 0px;
  }
`

export const TimePosted = styled.p`
  color: #475569;
  font-size: 18px;
  margin: 0px 8px 0px 8px;
`

export const HorizontalLine = styled.hr`
  border: 2px solid #475569;
  border-radius: 10px;
  color: #475569;
  width: 100%;
`
export const ChannelContainer = styled.div`
  display: flex;
  margin: 0px 8px 0px 8px;
`
export const ChannelLogo = styled.img`
  height: 50px;
  margin-right: 8px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ChannelName = styled.p`
  color: #475569;
  font-size: 18px;
  line-height: 0;
`

export const SubscribeCount = styled.p`
  color: #475569;
  font-size: 18px;
  line-height: 0;
`
export const Description = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  font-size: 15px;
  font-weight: 600;
  display: ${props => (props.isMedium ? 'none' : 'flex')};

  @media screen and (min-width: 768px) {
    display: ${props => (props.isMedium ? 'flex' : 'none')};
  }
`

export const HomeLoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85vw;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const HomeFailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const FailureImage = styled.img`
  height: 300px;
`

export const FailureText = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
`

export const FailurePara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
`

export const RetryButton = styled.button`
  background-color: blue;
  border: none;
  padding: 10px 18px 10px 18px;
  font-weight: bold;
  color: white;
`
