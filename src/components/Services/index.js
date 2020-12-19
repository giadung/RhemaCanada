import React from 'react'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ChurchIcon,
  SchoolIcon,
  FoundationIcon,
  ServicesH3
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>What We Do</ServicesH1>
      <ServicesWrapper>
        <ServicesCard href='https://rhemaonline.ca' target='_blank'>
          <ChurchIcon />
          <ServicesH3>Church</ServicesH3>
        </ServicesCard>
        <ServicesCard href='http://kingscollegepsc.ca' target='_blank'>
          <SchoolIcon />
          <ServicesH3>Education</ServicesH3>
        </ServicesCard>
        <ServicesCard href='http://rfcanada.org' target='_blank'>
          <FoundationIcon />
          <ServicesH3>Foundation</ServicesH3>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
