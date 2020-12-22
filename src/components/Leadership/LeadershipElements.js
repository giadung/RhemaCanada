import styled from 'styled-components'

export const LeadershipContainer = styled.div`
  height: 870px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 150px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid var(--grey);
  }

  @media screen and (max-width: 480px) {
    padding-top: 120px;
  }
`

export const LeadershipH1 = styled.h1`
  color: var(--dark-grey);
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    margin-bottom: 30px;
  }
`

export const LeadershipWrapper = styled.div`
  width: 1200px;

  .tab-list {
    border-bottom: 1px solid var(--grey);
    padding-left: 20px;
  }

  .tab-list-item {
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    font-weight: 500;
  }

  .tab-list-active {
    background-color: #fff;
    border: solid var(--grey);
    border-width: 1px 1px 0 1px;
    border-radius: 10px 10px 0 0;
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    .tab-list-item {
      max-width: 50%;
      font-size: 14px;
    }
  }
`

export const TabP = styled.p`
  padding: 40px 20px 40px 20px;
  text-align: center;
  font-size: 15px;
`
