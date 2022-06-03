import React from 'react'

import { Body, Container, Image } from 'components'

import {
  AnchorButton,
  bodyStyles,
  containerStyles,
  Content,
  ErrorCode,
  imageStyles,
  OrientationErrorWrapper,
} from './styles'

interface Props {
  code?: number | null | string
  message?: string
  imgSrc?: string
  imgAlt?: string
  showCta?: boolean
}

export const ErrorPage: React.FC<Props> = (props) => {
  return (
    <Container
      outerStyles={containerStyles.outer}
      innerStyles={containerStyles.inner}
    >
      {props.imgSrc && (
        <Image
          fs
          fit="contain"
          css={imageStyles}
          src={props.imgSrc}
          alt={props.imgAlt}
          boxshadow="none"
          border={0}
        />
      )}
      <Content>
        <ErrorCode>{props.code}</ErrorCode>
        <Body css={bodyStyles} bold>
          {props.message}
        </Body>
        {props.showCta && (
          <AnchorButton href="/">Back to homepage</AnchorButton>
        )}
      </Content>
    </Container>
  )
}

export const OrientationError = () => {
  return (
    <OrientationErrorWrapper id="orientation-error">
      <ErrorPage
        message="Please rotate your device!"
        showCta={false}
        imgSrc=""
        code={'🔄'}
      />
    </OrientationErrorWrapper>
  )
}

ErrorPage.defaultProps = {
  message: 'Page not found, something has been edited or removed',
  code: 101,
  imgSrc: '/images/illustrations/error.png',
  imgAlt: 'error-illustration',
  showCta: true,
}
