import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: calc(100vh - 240px);
  position: relative;

  /* Add: before styles */
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 1;
  }

  @media screen and (max-width: 480px) {
    height: calc(100vh - 200px);
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: var(--light-grey);
`

export const HeroContent = styled.div`
  z-index: 2;
  max-width: 600px;
  position: absolute;
  bottom: 100px;
  right: 10%;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  animation: slideUp 1s ease-out 0s 1;

  @media screen and (max-width: 1024px) {
    bottom: 7%;
    right: 5%;
  }

  @media screen and (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }

  @media screen and (max-width: 480px) {
    bottom: 10px;
    left: 10px;
    right: 10px;
    padding: 35px 35px;
  }

  @media screen and (max-width: 360px) {
    padding: 20px 20px;
  }
`

export const HeroH1 = styled.h1`
  color: var(--blue);
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  animation: 1s ease-out 0s 1 slideUp;

  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.2;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.2rem;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 1rem;
  line-height: 1.4;
  max-width: 600px;
  animation: 1s ease-out 0s 1 slideUp;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 10px;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.77rem;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
