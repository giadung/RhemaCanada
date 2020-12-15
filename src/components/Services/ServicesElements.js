import styled from 'styled-components'
import { FaChurch } from 'react-icons/fa'

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
  color: #008adb;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background: #f7f8fa;
  /* display: flex;
  flex-direction: flex-start; */
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 100px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: #008adb;
    color: #fff !important;
  }
`

// export const IconWrapper = styled.div`
//   height: 160px;
//   width: 160px;
//   margin-bottom: 10px;
// `

export const ChurchIcon = styled(FaChurch)`
  font-size: 80px;
  padding-bottom: 20px;
  display: block;
  margin: auto;
`

export const ServicesH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`
