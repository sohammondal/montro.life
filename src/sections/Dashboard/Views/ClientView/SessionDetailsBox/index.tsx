import React from 'react'

import { Body } from 'components/Typography'

import { Wrapper } from './styles'

import { SessionDetails } from '../config'

export const SessionDetailsBox: React.FC<{
  sessionDetails: SessionDetails
}> = ({ sessionDetails }) => {
  return (
    <Wrapper>
      <li>
        <Body variant="md">Journey so far</Body>
        <div>
          <span>
            <Body variant="sm">Classes taken</Body>
            <Body>{sessionDetails.totalClasses}</Body>
          </span>
          <span>
            <Body variant="sm">Sessions completed</Body>
            <Body>{sessionDetails.totalSessions}</Body>
          </span>
        </div>
      </li>
      <li>
        <Body variant="md">Current Session</Body>
        <div>
          <span>
            <Body variant="sm">Classes taken</Body>
            <Body>{sessionDetails.currentSession?.classesCompleted}</Body>
          </span>
          <span>
            <Body variant="sm">Classes pending</Body>
            <Body>{sessionDetails.currentSession?.classesLeft}</Body>
          </span>
        </div>
      </li>
    </Wrapper>
  )
}
