import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'

import NxtwatchContext from '../../context/NxtwatchContext'

import {
  SideBarContainer,
  LinksContainer,
  LinkItem,
  NavLink,
  ItemText,
  ContactUsContainer,
  ContactHeading,
  SocialIconsContainer,
  SocialIcon,
  Description,
} from './styledComonents'

const activeTabsConsts = {
  home: 'Home',
  trending: 'Trending',
  gaming: 'Gaming',
  savedVideos: 'Saved Videos',
}

const SideBar = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark, activeTab, activeTabItem} = value

      const onClickHomeTab = () => {
        activeTabItem(activeTabsConsts.home)
      }

      const onClickTrendingTab = () => {
        activeTabItem(activeTabsConsts.trending)
      }

      const onClickGamingTab = () => {
        activeTabItem(activeTabsConsts.gaming)
      }

      const onClickSavedVideosTab = () => {
        activeTabItem(activeTabsConsts.savedVideos)
      }

      const renderListLinksItems = () => {
        const iconColor = isDark ? '#ffffff' : '#383838'

        const bgColor = isDark ? '#383838' : '#f1f5f9'

        return (
          <LinksContainer>
            <LinkItem
              onClick={onClickHomeTab}
              isActive={activeTab === activeTabsConsts.home ? bgColor : null}
            >
              <NavLink to="/">
                <AiFillHome
                  size={22}
                  color={
                    activeTab === activeTabsConsts.home ? '#ff0b37' : iconColor
                  }
                />
                <ItemText isDark={isDark}>Home</ItemText>
              </NavLink>
            </LinkItem>
            <LinkItem
              onClick={onClickTrendingTab}
              isActive={
                activeTab === activeTabsConsts.trending ? bgColor : null
              }
            >
              <NavLink to="/trending">
                <AiFillFire
                  size={22}
                  color={
                    activeTab === activeTabsConsts.trending
                      ? '#ff0b37'
                      : iconColor
                  }
                />
                <ItemText isDark={isDark}>Trending</ItemText>
              </NavLink>
            </LinkItem>
            <LinkItem
              onClick={onClickGamingTab}
              isActive={activeTab === activeTabsConsts.gaming ? bgColor : null}
            >
              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={22}
                  color={
                    activeTab === activeTabsConsts.gaming
                      ? '#ff0b37'
                      : iconColor
                  }
                />
                <ItemText isDark={isDark}>Gaming</ItemText>
              </NavLink>
            </LinkItem>
            <LinkItem
              onClick={onClickSavedVideosTab}
              isActive={
                activeTab === activeTabsConsts.savedVideos ? bgColor : null
              }
            >
              <NavLink to="/saved-videos">
                <RiPlayListAddFill
                  size={22}
                  color={
                    activeTab === activeTabsConsts.savedVideos
                      ? '#ff0b37'
                      : iconColor
                  }
                />
                <ItemText isDark={isDark}>Saved videos</ItemText>
              </NavLink>
            </LinkItem>
          </LinksContainer>
        )
      }

      const renderContactUsContainer = () => {
        const c = 0

        return (
          <ContactUsContainer>
            <ContactHeading isDark={isDark}>Contact Us</ContactHeading>
            <SocialIconsContainer>
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsContainer>
            <Description isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </Description>
          </ContactUsContainer>
        )
      }

      return (
        <SideBarContainer>
          {renderListLinksItems()}
          {renderContactUsContainer()}
        </SideBarContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default SideBar
