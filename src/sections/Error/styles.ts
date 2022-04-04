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

    ${media.tablet} {
      ${flexWrap.no}
    }
  `,
}

export const imageStyles = css`
  min-width: 300px;
  max-width: 500px;

  ${media.tablet} {
    flex: 1;
  }
`

export const Content = styled.div`
  ${flexColCenter}
  flex:1;
  max-width: 400px;

  ${media.tablet} {
    ${display.block}
    margin-left: ${(props) => props.theme.spacings['44']};
  }
`

export const ErrorCode = styled.h1`
  font-size: 9rem;
  margin: 0;
`

export const bodyStyles = css`
  margin: ${(props) => props.theme.spacings['22']} 0;
  ${textAlign.center}

  ${media.tablet} {
    ${textAlign.left}
  }
`

export const AnchorButton = styled.a`
  ${display.block}
  width: max-content;
  ${flexRowCenter}
  ${buttonStyles}
`
