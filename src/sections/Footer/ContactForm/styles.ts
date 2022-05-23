import styled, { css } from 'styled-components'

import { flexColCenter, media } from 'theme'

export const FormContainer = styled.div`
  ${flexColCenter}
  width: 100%;

  .input-wrapper {
    margin-bottom: 1rem;
  }

  .checkbox-wrapper,
  .input-wrapper {
    width: 95%;
  }

  ${media.tabletPortrait} {
    .checkbox-wrapper,
    .input-wrapper {
      width: 100%;
    }
  }

  ${media.tabletLandscape} {
    text-align: left;
  }
`

export const btnStyles = css`
  width: 70%;
  margin-top: 44px;
  padding: 7px 50px;

  ${media.tabletPortrait} {
    align-self: flex-start;
    margin-top: 22px;
    width: 250px;
  }
`
