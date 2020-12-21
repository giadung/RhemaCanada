import React from 'react'
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from './HeroElements'
import Video from '../../videos/Video.mp4'

const HeroSection = () => {
  return (
    <HeroContainer id='hero'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to Rhema Canada</HeroH1>
        <HeroP>
          Rhema Canada is a world class people-centered organization with people
          at the heart of what we do. We change lives in the community and the
          world with a focus on economic empowerment, ensuring children in areas
          of poverty receive quality education and supporting the embodiment of
          spiritual excellence.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
