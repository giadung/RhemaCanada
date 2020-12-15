import React from 'react'
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='services' onClick={toggle}>
            What We Do
          </SidebarLink>
          <SidebarLink to='about' onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to='leadership' onClick={toggle}>
            Leadership
          </SidebarLink>
          <SidebarLink to='strategy' onClick={toggle}>
            Corporate Strategy
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/' onClick={toggle}>
            Book An Event
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
