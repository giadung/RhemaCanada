import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: #fff;
  /* background-color: rgba(255, 255, 255, 0.6); */
  width: 100%;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  position: sticky;
  top: 0;
  z-index: 3;
  box-shadow: 0px 12px 45px 0px rgba(0, 0, 0, 0.09);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`

export const NavLogo = styled(LinkS)`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 100%;
`

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 4px solid var(--blue);
    transition: 0.2s;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const NavBtnLink = styled.a`
  border-radius: 100px;
  background: var(--blue);
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    transition: all 0.3s ease-in-out;
    background: var(--dark-blue);
  }
`
