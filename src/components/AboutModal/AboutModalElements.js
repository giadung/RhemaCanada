import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
`

export const ModalContainer = styled.div`
  width: 720px;
  height: auto;
  max-height: 80%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: var(--text-color);
  position: relative;
  border-radius: 10px;
  padding: 60px 70px 70px 70px;
  overflow: auto;

  @media screen and (max-width: 480px) {
    margin: auto;
    display: block;
    width: 90%;
    max-height: 720px;
    padding: 50px 40px 40px 40px;
  }
`

export const ModalH1 = styled.h1`
  color: var(--blue);
  font-size: 3rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 32px;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 15%;
    border-bottom: 1px solid;
    color: #000;
  }
`

export const ModalH2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const ModalP = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
`

export const ModalUl = styled.ul`
  padding-left: 20px;
  font-size: 14px;
`

export const ModalLi = styled.li`
  margin-bottom: 5px;
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
`
