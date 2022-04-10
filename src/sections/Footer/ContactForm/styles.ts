import styled, { css } from 'styled-components'

import { display, flexColCenter, media } from 'theme'

export const FormContainer = styled.div`
  ${flexColCenter}

  .input-wrapper {
    margin-bottom: 1rem;
    width: 100%;
  }

  ${media.tabletPortrait} {
    ${display.block}
    padding-left: 3rem;
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
