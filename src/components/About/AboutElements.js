import styled from 'styled-components'

export const AboutContainer = styled.div`
  height: 860px;
  padding-top: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: linear-gradient(#008adb 60%, transparent 60%) no-repeat; */
  box-shadow: 0 500px 0 0 #008adb inset;

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 480px) {
    height: 1200px;
    padding-top: 150px;
  }
`

export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
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
  color: #5a596a;
  background: #f7f8fa;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  text-decoration: none;

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
