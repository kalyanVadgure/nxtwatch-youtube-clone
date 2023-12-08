import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {HiMenu, HiOutlineSun} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'

import {AiFillHome, AiFillFire, AiOutlineClose} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiSaveFill} from 'react-icons/ri'

import NxtwatchContext from '../../context/NxtwatchContext'

import {
  HeaderMainContainer,
  MobileHeaderContainer,
  NxtWatchLogo,
  NavItemsContainer,
  ThemeButton,
  LogoutButton,
  DesktopHeaderContainer,
  DesktopLogoutButton,
  UserProfile,
  DeskTopNavItemsContainer,
  PopupContainer,
  ConfirmationText,
  PopupMenuContainer,
  LinksContainer,
  LinkItem,
  NavLink,
  ItemText,
  CloseButton,
} from './styledComponents'

const Header = props => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark, changeTheme, activeTab, activeTabItem} = value

      const nxtWatchLogo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeIcon = isDark ? (
        <HiOutlineSun size={34} color="#e2e8f0" />
      ) : (
        <FaMoon size={30} />
      )

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props

        history.replace('/login')
      }

      const onClickLogo = () => {
        activeTabItem('Home')
      }

      const onChangeTheme = () => {
        changeTheme()
      }

      const mobileNavbar = () => {
        const menuIcon = isDark ? (
          <HiMenu size={34} color="#ffffff" />
        ) : (
          <HiMenu size={34} />
        )

        const logOutButton = isDark ? (
          <FiLogOut size={30} color="#ffffff" />
        ) : (
          <FiLogOut size={30} />
        )

        return (
          <MobileHeaderContainer>
            <Link to="/">
              <NxtWatchLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
                onClick={onClickLogo}
              />
            </Link>

            <NavItemsContainer>
              <ThemeButton
                type="button"
                onClick={onChangeTheme}
                data-testid="theme"
              >
                {themeIcon}
              </ThemeButton>

              <Popup
                trigger={<LogoutButton type="button">{menuIcon}</LogoutButton>}
              >
                {close => {
                  const iconColor = isDark ? '#ffffff' : '#383838'

                  return (
                    <PopupMenuContainer isDark={isDark}>
                      <CloseButton type="button" onClick={() => close()}>
                        <AiOutlineClose color={iconColor} size={22} />
                      </CloseButton>

                      <LinksContainer>
                        <LinkItem>
                          <NavLink to="/">
                            <AiFillHome size={22} color={iconColor} />
                            <ItemText isDark={isDark}>Home</ItemText>
                          </NavLink>
                        </LinkItem>
                        <LinkItem>
                          <NavLink to="/trending">
                            <AiFillFire size={22} color={iconColor} />
                            <ItemText isDark={isDark}>Trending</ItemText>
                          </NavLink>
                        </LinkItem>
                        <LinkItem>
                          <NavLink to="/gaming">
                            <SiYoutubegaming size={22} color={iconColor} />
                            <ItemText isDark={isDark}>Gaming</ItemText>
                          </NavLink>
                        </LinkItem>
                        <LinkItem>
                          <NavLink to="/saved-videos">
                            <RiSaveFill size={22} color={iconColor} />
                            <ItemText isDark={isDark}>Saved videos</ItemText>
                          </NavLink>
                        </LinkItem>
                      </LinksContainer>
                    </PopupMenuContainer>
                  )
                }}
              </Popup>
              <Popup
                trigger={
                  <LogoutButton type="button">{logOutButton}</LogoutButton>
                }
                modal
              >
                {close => {
                  const a = 0

                  return (
                    <PopupContainer isDark={isDark}>
                      <ConfirmationText>
                        Are you sure, you want to logout
                      </ConfirmationText>
                      <div>
                        <DesktopLogoutButton
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </DesktopLogoutButton>
                        <DesktopLogoutButton
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </DesktopLogoutButton>
                      </div>
                    </PopupContainer>
                  )
                }}
              </Popup>
            </NavItemsContainer>
          </MobileHeaderContainer>
        )
      }

      const deskTopNavBar = () => {
        const a = 0

        return (
          <DesktopHeaderContainer>
            <Link to="/">
              <NxtWatchLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
                onClick={onClickLogo}
              />
            </Link>
            <DeskTopNavItemsContainer>
              <ThemeButton onClick={onChangeTheme} data-testid="theme">
                {themeIcon}
              </ThemeButton>
              <UserProfile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Popup
                trigger={
                  <DesktopLogoutButton
                    isDark={isDark}
                    type="button"
                    onClick={onClickLogout}
                  >
                    Logout
                  </DesktopLogoutButton>
                }
                modal
              >
                {close => {
                  const b = 0

                  return (
                    <PopupContainer isDark={isDark}>
                      <ConfirmationText>
                        Are you sure you want to logout?
                      </ConfirmationText>
                      <div>
                        <DesktopLogoutButton
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </DesktopLogoutButton>
                        <DesktopLogoutButton
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </DesktopLogoutButton>
                      </div>
                    </PopupContainer>
                  )
                }}
              </Popup>
            </DeskTopNavItemsContainer>
          </DesktopHeaderContainer>
        )
      }

      return (
        <HeaderMainContainer isDark={isDark}>
          {mobileNavbar()}
          {deskTopNavBar()}
        </HeaderMainContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default withRouter(Header)
