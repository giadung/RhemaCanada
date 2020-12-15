import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Rhema Canada</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                What We Do
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about' smooth={true}>
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='leadership' smooth={true}>
                Leadership
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='strategy' smooth={true}>
                Corporate Strategy
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact' smooth={true}>
                Contact Us
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/' smooth={true}>
              Book An Event
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
