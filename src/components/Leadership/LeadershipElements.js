import styled from 'styled-components'

export const LeadershipContainer = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const LeadershipH1 = styled.h1`
  color: var(--dark-grey);
`
