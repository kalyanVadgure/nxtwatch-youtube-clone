import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15%;

    height: 90vh;
  }
`

export const LinksContainer = styled.div`
  list-style-type: none;
`
export const LinkItem = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 10px 0px 15px;

  background-color: ${props => props.isActive};
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
export const ContactUsContainer = styled.div`
    display: flex,
    flex-direction: column,
    border: 1px solid black,
    padding: 20px;

`

export const ContactHeading = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  font-size: 24px;
`

export const SocialIconsContainer = styled.div`
  display: flex;
`

export const SocialIcon = styled.img`
  height: 30px;
  margin: 0px 5px 0px 5px;
`
export const Description = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  font-size: 16px;
  font-weight: 400;
`
