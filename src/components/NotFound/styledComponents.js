import styled from 'styled-components'

export const HomeBodyContainer = styled.div`
  display: flex;
`
export const HomeMainContianer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  width: 85%;
`

export const FailureImage = styled.img`
  height: 400px;
`

export const FailureText = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
`

export const FailurePara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
`
