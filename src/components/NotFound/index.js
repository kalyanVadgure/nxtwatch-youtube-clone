import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeMainContianer,
  HomeBodyContainer,
  FailureImage,
  FailureText,
  FailurePara,
  NotFoundContainer,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const NotFound = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark} = value

      const notFoundImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <HomeMainContianer isDark={isDark}>
          <Header />
          <HomeBodyContainer>
            <SideBar />
            <NotFoundContainer>
              <FailureImage src={notFoundImage} alt="not found" />
              <FailureText isDark={isDark}>Page Not Found</FailureText>
              <FailurePara isDark={isDark}>
                we are sorry, the page you requested could not be found.
              </FailurePara>
            </NotFoundContainer>
          </HomeBodyContainer>
        </HomeMainContianer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default NotFound
