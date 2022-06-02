import styled, { css } from 'styled-components'

import { flexColCenter, media } from 'theme'

export const Form = styled.form`
  width: 100%;

  h3 {
    margin-bottom: 25px;
  }

  .input-wrapper {
    margin-bottom: 15px;
    .error-label {
      height: unset;
      min-height: 10px;
    }
  }

  input {
    border-color: ${(props) => props.theme.colors.Mischka};
  }

  button {
    width: 100%;
  }
`

export const modalCss = css`
  height: max-content;

  .contents {
    padding: 30px !important;
    ${flexColCenter}
  }

  ${media.tabletPortrait} {
    width: 50%;
    height: max-content;
  }

  ${media.tabletLandscape} {
    width: 30%;
    height: max-content;
    .contents {
      padding: 35px;
    }
  }

  ${media.desktop} {
    width: 35%;
    height: 40%;
    .contents {
      padding: 50px;
    }
  }
`
