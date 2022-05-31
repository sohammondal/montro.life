import styled, { css } from 'styled-components'

import { hw, media } from 'theme'

export const From = styled.form`
  display: flex;
  flex-direction: column;

  ${media.tabletLandscape} {
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-evenly;
  }

  .input-wrapper,
  .select-wrapper {
    flex-basis: 45%;
    input {
      border-color: #d5d4d9;
    }
  }

  .select-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: end;
    .select-search {
      margin-top: 7px;
    }
  }
`

export const modalCss = css`
  .contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      width: 50%;
      align-self: center;
    }
  }

  ${media.custom(768, 'max')} {
    ${hw.full}
    border-radius: 0;
    .contents {
      overflow: hidden auto;
      button {
        width: 100%;
        align-self: center;
      }
    }
  }

  ${media.tabletPortrait} {
    height: 70%;
  }

  ${media.tabletLandscape} {
    width: 70%;
  }

  ${media.desktop} {
    width: 50%;
  }
`
