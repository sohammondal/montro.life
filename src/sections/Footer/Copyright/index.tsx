import React from 'react'

import { Wrapper } from './styles'

export const Copyright = () => {
  return (
    <Wrapper>
      <div>
        <small>
          Copyright © {new Date().getFullYear()} Montro Health & Wellness.{' '}
          <span>
            <br />
            All rights reserved.
          </span>
        </small>
      </div>
      <div>
        <small>Designed & Developed by </small>
        <a href="https://sohammondal.com" target="_blank" rel="noreferrer">
          Soham Mondal
        </a>
      </div>
    </Wrapper>
  )
}
