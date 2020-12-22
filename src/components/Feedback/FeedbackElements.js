import styled from 'styled-components'

export const FeedbackContainer = styled.div`
  height: 870px;
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`

export const FeedbackH1 = styled.h1`
  color: #fff;
  margin-top: 140px;
  position: relative;
  margin-bottom: 60px;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 33%;
    border-bottom: 1px solid #fff;
  }
`

export const FeedbackWrapper = styled.div`
  width: 600px;

  p {
    margin-bottom: 15px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px 10px;
    border: 1px solid var(--grey);
    border-radius: 5px;

    :focus {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      border: 1px solid var(--blue);
      outline: 0;
    }
  }

  button {
    margin-top: 20px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
    border: 2px solid #fff;
    border-radius: 50px;
    background-color: var(--blue);
    padding: 10px 40px;
    cursor: pointer;

    :hover {
      background-color: #fff;
      color: var(--dark-grey);
    }
  }
`
