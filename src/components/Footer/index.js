import React from 'react'
import { FooterContainer, FooterP } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterP>
        &copy; {new Date().getFullYear()} Rhema Canada. All rights reserved.
      </FooterP>
    </FooterContainer>
  )
}

export default Footer
