import React from 'react'
import Tabs from '../Tabs'
import {
  LeadershipContainer,
  LeadershipWrapper,
  LeadershipH1,
  TabP
} from './LeadershipElements'

const Leadership = () => {
  return (
    <LeadershipContainer id='leadership'>
      <LeadershipH1>Leadership</LeadershipH1>
      <LeadershipWrapper>
        <Tabs>
          <div label='Executive Management Team'>
            <TabP>
              Tasked with the operational success of the Rhema organization, our
              Executive Team ensures the successful execution of our global
              mission. We invite you to take a moment to meet the men and women
              who are leading our future while inspiring us each day.
            </TabP>
          </div>
          <div label='Executive Board'>
            <TabP>
              Tasked with overall governance, our Executive Board ensures that
              through fiduciary duty, oversight and strategic policies, the
              vision of our organization is realized. Meet the members of our
              board who are championing our future success.
            </TabP>
          </div>
        </Tabs>
      </LeadershipWrapper>
    </LeadershipContainer>
  )
}

export default Leadership
