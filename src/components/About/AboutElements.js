import styled from 'styled-components'

export const AboutContainer = styled.div`
  height: 870px;
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: linear-gradient(#008adb 60%, transparent 60%) no-repeat; */
  box-shadow: 0 500px 0 0 var(--blue) inset;

  @media screen and (max-width: 768px) {
    height: 100%;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    margin-bottom: 70px;
  }
`

export const AboutH1 = styled.h1`
  margin-bottom: 64px;
  color: #fff;
`

export const AboutWrapper = styled.div`
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

export const AboutCard = styled.a`
  background: var(--light-grey);
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  animation: slideUp 1s ease-out 0s 1;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 10px 20px 4px rgba(0, 0, 0, 0.12);
  }
`

export const AboutH2 = styled.h2`
  text-align: center;
  margin: 32px auto;
  padding-bottom: 24px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 33%;
    width: 33%;
    border-bottom: 1px solid;
  }
`

export const AboutP = styled.p`
  font-size: 15px;
  text-align: center;
  padding: 0 20px 30px 20px;
`
