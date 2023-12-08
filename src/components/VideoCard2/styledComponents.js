import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoItem = styled.div`
  display: flex;
  width: 100vw;
  box-sizing: border-box;
  margin: 15px 0px 0px 0px;

  @media screen and (min-width: 768px) {
    width: 90%;
    margin: 20px;
  }
`
export const VideoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const LogoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 8px 0px 8px;
`

export const ChannelLogo = styled.img`
  height: 50px;
  margin-right: 8px;

  display: ${props => (props.isMedium ? 'none' : 'flex')};

  @media screen and (min-width: 768px) {
    display: ${props => (props.isMedium ? 'flex' : 'none')};
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  font-size: 20px;
`
export const ChannelNameAndVideoInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 8px 0px 8px;
  padding: 0px 8px 0px 8px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  color: #475569;
  font-size: 18px;
`

export const ViewsAndTimePostedContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Views = styled.p`
  color: #475569;
  font-size: 18px;
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
