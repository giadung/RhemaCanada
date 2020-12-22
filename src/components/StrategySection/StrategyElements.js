import styled from 'styled-components'

export const StrategyContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#fff' : 'var(--light-grey)')};

  @media screen and (max-width: 768px) {
    padding: 100px 0 0 0;
  }
`

export const StrategyWrapper = styled.div`
  height: 870px;
  width: 100%;
  display: grid;
  grid-template-columns: 7fr 5fr;
  grid-gap: 52px;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    grid-gap: 0;
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding-left: 48px;
  grid-area: col1;

  @media screen and (max-width: 480px) {
    padding: 0 20px;
    width: 100%;
  }
`

export const Column2 = styled.div`
  grid-area: col2;
`

export const TextWrapper = styled.div`
  padding-bottom: 20px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

export const Heading = styled.h1`
  margin-bottom: 12px;
  line-height: 1.15;
  color: var(--dark-grey);
`

export const Subtitle = styled.p`
  font-size: 15px;
  line-height: 1.4;
  letter-spacing: 1.4px;
  margin-bottom: 60px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 40px;
  }
`

export const SmallRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
`

export const STextWrapper = styled.div`
  max-width: 500px;
  display: flex;
  margin-right: 50px;

  @media screen and (max-width: 480px) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`

export const Number = styled.p`
  color: var(--blue);
  width: 32px;
  font-size: 32px;
  font-weight: 600;
  margin-right: 20px;
`

export const SubTitle = styled.h2`
  color: var(--blue);
  font-size: 20px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  line-height: 1.5;
`

export const ImgWrap = styled.div`
  max-width: 748px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
`
