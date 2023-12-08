import styled from 'styled-components'

export const HomeMainContianer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
`

export const HomeBodyContainer = styled.div`
  display: flex;
`

export const VideosListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 85vw;
    padding: 10px;
  }
`

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const PageNameAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  @media screen and (min-width: 768px) {
    width: 85vw;
    padding: 10px;
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

export const PageNameContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
`

export const IconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#e1e8f0')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-right: 10px;
  box-sizing: border-box;
`

export const PageName = styled.h1`
  color: ${props => (props.isDark ? '#f8fafc' : '#372f3b')};
`
