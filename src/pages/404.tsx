import React from 'react'

import { getErrorFromCode } from 'helpers'
import { ErrorPage } from 'sections'

const Error = () => {
  return <ErrorPage {...getErrorFromCode(404)} />
}

export default Error
