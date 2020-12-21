import styled from 'styled-components'
import { FaChurch } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'
import { FaCubes } from 'react-icons/fa'

export const ServicesContainer = styled.div`
  height: 870px;
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-top: 125px;
    height: 100%;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    margin-bottom: 70px;
  }
`

export const ServicesH1 = styled.h1`
  margin-bottom: 64px;
  color: var(--blue);
`

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.a`
  color: var(--text-color);
  background: var(--light-grey);
  align-items: center;
  border-radius: 10px;
  width: 280px;
  max-height: 340px;
  padding: 80px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  animation: slideUp 1s ease-out 0s 1;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background: var(--blue);
    color: #fff;
  }
`

export const ChurchIcon = styled(FaChurch)`
  font-size: 60px;
  padding-bottom: 20px;
  display: block;
  margin: auto;
`

export const SchoolIcon = styled(IoIosSchool)`
  font-size: 60px;
  padding-bottom: 20px;
  display: block;
  margin: auto;
`

export const FoundationIcon = styled(FaCubes)`
  font-size: 60px;
  padding-bottom: 20px;
  display: block;
  margin: auto;
`

export const ServicesH3 = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  position: relative;
  padding-bottom: 24px;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 33%;
    width: 33%;
    border-bottom: 1px solid;
  }
`
