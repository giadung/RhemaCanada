import React from 'react'
import {
  AboutContainer,
  AboutH1,
  AboutWrapper,
  AboutCard,
  AboutH2,
  AboutP
} from './AboutElements'

const About = () => {
  return (
    <AboutContainer id='about'>
      <AboutH1>About Us</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <AboutH2>Our Mission</AboutH2>
          <AboutP>
            Our Roadmap starts with our enduring mission which declares our
            organizational purpose and serves as the standard against which all
            of our actions and decisions are measured. Our mission is: <br />
            <br />
            <b>
              <i>"Changing and Affecting Lives"</i>
            </b>
          </AboutP>
        </AboutCard>
        <AboutCard href='http://kingscollegepsc.ca' target='_blank'>
          <AboutH2>Our Vision</AboutH2>
          <AboutP>
            Our vision is the continuity of the ministry of Jesus Christ and can
            be summed up in two words: Changed Lives <br />
            At Rhema we seek to change lives through:
            <br /> ... <br />
            <br />
            <u>Learn More</u>
          </AboutP>
        </AboutCard>
        <AboutCard href='http://rfcanada.org' target='_blank'>
          <AboutH2>Core Values</AboutH2>
          <AboutP>
            Our core values give shape to our organizational culture while
            informing our behavior in the world; our holistic values promote
            life at its very best and they define how we live: <br /> ... <br />
            <br />
            <u>Learn More</u>
          </AboutP>
        </AboutCard>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default About
