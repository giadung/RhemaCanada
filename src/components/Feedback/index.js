import React from 'react'
import FeedbackForm from '../FeedbackForm'
import {
  FeedbackContainer,
  FeedbackH1,
  FeedbackWrapper
} from './FeedbackElements'

const Feedback = () => {
  return (
    <FeedbackContainer>
      <FeedbackH1>Give Feedback</FeedbackH1>
      <FeedbackWrapper>
        <FeedbackForm />
      </FeedbackWrapper>
    </FeedbackContainer>
  )
}

export default Feedback
