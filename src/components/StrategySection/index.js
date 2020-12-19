import React from 'react'
import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  StrategyContainer,
  StrategyRow,
  StrategyWrapper,
  Subtitle,
  TextWrapper,
  SmallRow,
  STextWrapper,
  Number,
  SubTitle,
  Description
} from './StrategyElements'

const StrategySection = ({ id, header, subtitle, img, alt }) => {
  return (
    <>
      <StrategyContainer id={id}>
        <StrategyWrapper>
          <StrategyRow>
            <Column1>
              <TextWrapper>
                <Heading>{header}</Heading>
                <Subtitle>{subtitle}</Subtitle>
                <SmallRow>
                  <STextWrapper>
                    <Number>01</Number>
                    <TextWrapper>
                      <SubTitle>Supporting Spiritual Excellence:</SubTitle>
                      <Description>
                        Deliver with excellence a Spirit-filled worship &
                        ministry experience that is innovative, relevant and
                        that serves broader communities.
                      </Description>
                    </TextWrapper>
                  </STextWrapper>
                  <STextWrapper>
                    <Number>02</Number>
                    <TextWrapper>
                      <SubTitle>Affecting Human Wellness:</SubTitle>
                      <Description>
                        Deliver holistic programs and services that addresses
                        the spiritual, social and economic well-being of the
                        individual, family, and community.
                      </Description>
                    </TextWrapper>
                  </STextWrapper>
                </SmallRow>
                <SmallRow>
                  <STextWrapper>
                    <Number>03</Number>
                    <TextWrapper>
                      <SubTitle>Creating Sustainable Communities:</SubTitle>
                      <Description>
                        Feed, clothe, shelter, integrate and empower those
                        within the broader community who are unable to do so.
                      </Description>
                    </TextWrapper>
                  </STextWrapper>
                  <STextWrapper>
                    <Number>04</Number>
                    <TextWrapper>
                      <SubTitle>Building A Better World:</SubTitle>
                      <Description>
                        Engage in meaningful educational, missional and
                        environmental initiatives that further human growth and
                        progress.
                      </Description>
                    </TextWrapper>
                  </STextWrapper>
                </SmallRow>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
          </StrategyRow>
        </StrategyWrapper>
      </StrategyContainer>
    </>
  )
}

export default StrategySection
