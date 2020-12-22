import styled from 'styled-components'

export const FooterContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid var(--grey);
  }
`

export const FooterP = styled.p`
  color: var(--dark-grey);
  font-size: 14px;
`
