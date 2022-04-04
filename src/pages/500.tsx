import React from 'react'

import { getErrorFromCode } from 'helpers'
import { ErrorPage } from 'sections'

const Error = () => {
  return <ErrorPage {...getErrorFromCode(500)} />
}

export default Error
