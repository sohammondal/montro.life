import styled, { css } from 'styled-components'

import { flexRowCenter, flexColCenter, media } from 'theme/common.styles'

export const scannerBtnCss = css`
  width: 140px;
  margin-top: 50px;
`
export const manualBtnCss = css`
  width: max-content;
`

export const ManualBox = styled.div`
  ${flexColCenter}
  width: 100%;
  .select-wrapper {
    width: 100%;
    margin-bottom: 15px;
    p {
      display: none;
    }
  }

  ${media.tabletPortrait} {
    ${flexRowCenter}
    width: 85%;

    .select-wrapper {
      width: 50%;
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  ${media.tabletLandscape} {
    width: 50%;

    .select-wrapper {
      width: 50%;
    }
  }
`
