import styled, { css } from 'styled-components'

import { buttonStyles } from 'components/Button/styles'
import {
  display,
  flexColCenter,
  flexRowCenter,
  flexWrap,
  media,
  textAlign,
} from 'theme'

export const containerStyles = {
  outer: css`
    min-height: 90vh;
    max-height: 100vh;
    ${flexColCenter}
  `,
  inner: css`
    ${flexRowCenter}
    ${flexWrap.yes}

    ${media.tabletPortrait} {
      ${flexWrap.no}
    }
  `,
}

export const imageStyles = css`
  min-width: 300px;
  max-width: 500px;

  ${media.tabletPortrait} {
    flex: 1;
  }
`

export const Content = styled.div`
  ${flexColCenter}
  flex:1;
  max-width: 400px;

  ${media.tabletPortrait} {
    ${display.block}
  }
`

export const ErrorCode = styled.h1`
  font-size: 9rem;
  margin: 0;
`

export const bodyStyles = css`
  margin: ${(props) => props.theme.spacings['22']} 0;
  ${textAlign.center}

  ${media.tabletPortrait} {
    ${textAlign.left}
  }
`

export const AnchorButton = styled.a`
  ${display.block}
  width: max-content;
  ${flexRowCenter}
  ${buttonStyles}
`

export const OrientationErrorWrapper = styled.div`
  visibility: hidden;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99;

  h1,
  p {
    text-align: center;
  }
`
