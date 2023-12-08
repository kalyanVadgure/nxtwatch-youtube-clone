import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  padding: 20px;
`

/* mobile header */

export const MobileHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 786px) {
    display: none;
  }
`

export const NxtWatchLogo = styled.img`
  height: 33px;
`

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: space-between;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
`

/* desktop header */

export const DesktopHeaderContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 786px) {
    display: flex;
  }
`

export const DeskTopNavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 13%;
  justify-content: space-between;
`

export const DesktopLogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid;
  padding: 6px 12px 6px 12px;
  font-weight: bold;
  border-color: ${props => (props.isDark ? '#e2e8f0' : '#3b82f6')};
  color: ${props => (props.isDark ? '#e2e8f0' : '#3b82f6')};
  margin: 5px;
`

export const UserProfile = styled.img`
  height: 33px;
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f1f1f1')};
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

export const ConfirmationText = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#3b82f6')};
  font-size: 18px;
`

/* mobile menu */

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const LinkItem = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 10px 0px 15px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 80%;
  height: 30px;
`

export const ItemText = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  font-size: 15px;
  margin-left: 15px;
  font-weight: 600;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`
export const PopupMenuContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f1f1f1')};
  width: 130px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`
