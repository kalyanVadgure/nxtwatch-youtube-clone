import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  box-sizing: border-box;
  margin: 15px 0px 0px 0px;

  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 20px;
  }
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const ThumbNailImage = styled.img`
  width: 100%;
`
export const LogoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 8px 0px 8px;
`

export const ChannelLogo = styled.img`
  height: 50px;
  margin-right: 8px;
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
