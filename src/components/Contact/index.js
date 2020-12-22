import React from 'react'
import {
  ContactContainer,
  ContactWrapper,
  ContactH1,
  ContactH2,
  ContactP,
  ContactUl,
  ContactLi,
  TextWrapper,
  MapWrapper
} from './ContactElements'

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <ContactH1>Contact Us</ContactH1>
      <ContactWrapper>
        <TextWrapper>
          <ContactH2>Toronto Headquarter</ContactH2>
          <ContactP>49-40 Carl Hall Road Downsview Park, M3K 2C1</ContactP>
          <ContactUl>
            <ContactLi>
              <span>Mon-Fri:</span>9:00 am - 4:00 pm
            </ContactLi>
            <ContactLi>
              <span>Phone:</span>
              <a href='tel:4164961794'>(416) 496-1794</a>
            </ContactLi>
            <ContactLi>
              <span>Fax:</span>(416) 496-1795
            </ContactLi>
            <ContactLi>
              <span>Email:</span>
              <a href='mailto:info@rhemacanada.ca'>info@rhemacanada.ca</a>
            </ContactLi>
          </ContactUl>
        </TextWrapper>
        <MapWrapper>
          <iframe
            title='Google Maps'
            frameborder='0'
            scrolling='no'
            marginheight='0'
            marginwidth='0'
            src='https://maps.google.com/maps?q=40%20carl%20hall&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near'
            aria-label='40 carl hall'
          ></iframe>
        </MapWrapper>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
