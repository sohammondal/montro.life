import styled, { css } from 'styled-components'

import { flexColCenter, flexRowCenter, media } from 'theme/common.styles'

export const containerStyles = {
  outerStyles: css``,
  innerStyles: css`
    width: auto;
    height: 70vh;
    ${flexColCenter}

    h4 {
      margin-top: 5px;
    }
  `,
}

export const btnCss = css`
  ${flexRowCenter}
  width: 170px;
  justify-content: space-between;
  .qr-icon {
    font-size: 1.3rem;
  }
`

export const modalCss = css`
  .contents {
    ${flexColCenter}
    justify-content: space-between;
    .qr-code {
      margin-bottom: 10px;
    }
  }
`

export const Separator = styled.div`
  ${flexRowCenter}
  width: 90%;
  margin: 10px 0;
  &:before,
  &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #adadad;
  }
  &:not(:empty)::before {
    margin-right: 0.5em;
  }
  &:not(:empty)::after {
    margin-left: 0.5em;
  }

  ${media.tabletPortrait} {
    width: 25%;
  }
`
