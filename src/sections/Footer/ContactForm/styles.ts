import styled, { css } from 'styled-components'

import { display, flexColCenter, media } from 'theme'

export const FormContainer = styled.div`
  ${flexColCenter}
  padding: 0 1%;
  width: 100%;

  .input-wrapper {
    margin-bottom: 1rem;
    width: 100%;
  }

  ${media.tabletPortrait} {
    ${display.block}
    padding: 0;
  }
`

export const btnStyles = css`
  width: 70%;
  margin-top: 44px;
  padding: 7px 50px;
  background-color: ${(props) => props.theme.colors.BridalHealth};

  ${media.tabletPortrait} {
    align-self: flex-start;
    margin-top: 22px;
    width: 250px;
  }
`
