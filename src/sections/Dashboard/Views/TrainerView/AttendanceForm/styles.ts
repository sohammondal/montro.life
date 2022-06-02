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

    .submit-button {
      width: 50%;
      align-self: center;
      line-height: 35px;
    }
  }

  ${media.custom(768, 'max')} {
    width: 100% !important;
    height: 85% !important;
    border-radius: 0 !important;
    .contents {
      padding: 50px 30px !important;

      h3 {
        margin-bottom: 20px;
      }
      form {
        overflow: scroll;
      }
      .submit-button {
        width: 100%;
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
