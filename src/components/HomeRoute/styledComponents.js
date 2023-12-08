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
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};

  @media screen and (min-width: 768px) {
    width: 85vw;
    padding: 10px;
  }
`

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const SearchInputConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  width: 100%;
  margin: 10px;
  padding-left: 10px;

  @media screen and (min-width: 768px) {
    width: 50%;
    margin-left: 12px;
  }
`

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  height: 28px;
  outline: none;
  width: 95%;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
`
export const SearchIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 10%;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  border: none;
  outline: none;
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

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
`
