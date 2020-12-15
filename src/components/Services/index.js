import React from 'react'
import {
  IconWrapper,
  ChurchIcon,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>What We Do</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ChurchIcon />
          <ServicesH2>Church</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon2} /> */}
          <ServicesH2>Education</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon3} /> */}
          <ServicesH2>Foundation</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
