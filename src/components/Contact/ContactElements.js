import styled from 'styled-components'

export const ContactContainer = styled.div`
  height: 870px;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 100%;
    padding-top: 90px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 90px;
    height: 100%;
  }
`

export const ContactH1 = styled.h1`
  color: var(--dark-grey);
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`

export const ContactWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 1px solid var(--grey);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const TextWrapper = styled.div`
  padding: 50px;
  font-size: 15px;
`

export const ContactH2 = styled.h2`
  margin-top: 20px;
  padding-bottom: 15px;
  margin-bottom: 35px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20%;
    border-bottom: 2px solid var(--blue);
  }
`

export const ContactP = styled.p`
  margin-bottom: 30px;
  max-width: 240px;
`

export const ContactUl = styled.ul`
  list-style: none;

  span {
    font-weight: 600;
    display: inline-block;
    width: 90px;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  a:hover {
    color: var(--blue);
  }
`

export const ContactLi = styled.li`
  margin-bottom: 5px;
`

export const MapWrapper = styled.div`
  height: 100%;

  @media screen and (max-width: 480px) {
    height: 400px;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`
