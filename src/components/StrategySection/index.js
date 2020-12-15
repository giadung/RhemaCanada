import React from 'react'
import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  Description,
  StrategyContainer,
  StrategyRow,
  StrategyWrapper,
  Subtitle,
  TextWrapper
} from './StrategyElements'
import image from '../../images/strategy.svg'

const StrategySection = ({
  id,
  header,
  blueHeader,
  subtitle,
  description,
  alt
}) => {
  return (
    <>
      <StrategyContainer id={id}>
        <StrategyWrapper>
          <StrategyRow>
            <Column1>
              <TextWrapper>
                <Heading blueHeader={blueHeader}>{header}</Heading>
                <Subtitle>{subtitle}</Subtitle>
                <Description>{description}</Description>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} alt={alt} />
              </ImgWrap>
            </Column2>
          </StrategyRow>
        </StrategyWrapper>
      </StrategyContainer>
    </>
  )
}

export default StrategySection
