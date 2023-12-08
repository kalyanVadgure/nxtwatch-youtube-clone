import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 15px px 0px 0px;
`
export const VideoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 10px;
`

export const ThumbNailImage = styled.img`
  width: 250px;

  @media screen and (min-width: 768px) {
    width: 350px;
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

export const VideoTitle = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  font-size: 20px;
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
