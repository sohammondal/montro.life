import { css } from 'styled-components'

import { flexColCenter, media } from 'theme/common.styles'

export const modalCss = css`
  .contents {
    ${flexColCenter}
    justify-content: space-between;
    .qr-code {
      margin-bottom: 10px;
    }

    .qr-reader {
      width: 90%;

      section {
        div {
          border-width: 20px !important;
        }
      }

      ${media.tabletPortrait} {
        width: 70%;
        section {
          div {
            border-width: 50px;
          }
        }
      }

      ${media.tabletLandscape} {
        width: 90%;
      }

      ${media.desktop} {
        width: 60%;
      }
    }
  }
`
