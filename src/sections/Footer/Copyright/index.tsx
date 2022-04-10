import React from 'react'

import { Wrapper } from './styles'

export const Copyright = () => {
  return (
    <Wrapper>
      <div>
        <small>
          Copyright © {new Date().getFullYear()} Montro Health & Wellness.{' '}
          <br />
          All rights reserved.
        </small>
      </div>
      <div>
        <small>Designed & Developed by </small>
        <a href="https://sohammondal.com" target="_blank" rel="noreferrer">
          <strong>Soham Mondal</strong>
        </a>
      </div>
    </Wrapper>
  )
}
