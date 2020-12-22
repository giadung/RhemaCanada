import styled from 'styled-components'

export const FeedbackContainer = styled.div`
  height: 870px;
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FeedbackH1 = styled.h1`
  color: #fff;
  margin-top: 120px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 33%;
    border-bottom: 1px solid #fff;
  }
`

export const FeedbackWrapper = styled.div``
