import styled, { css } from 'styled-components'

import { flexRow, flexRowCenter, media } from 'theme'

export const containerStyles = {
  outerStyles: css``,
  innerStyles: css`
    max-width: unset;

    ${media.custom(576, 'max')} {
      .header-logo-wrapper {
        .montro-logo-svg {
          height: 95px !important;
        }
      }
    }

    ${media.tabletPortrait} {
      justify-content: flex-end;
      margin-right: 10px;
    }
  `,
}

export const DashNav = styled.nav`
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    outline: none;
    border: 1px solid #adadad;
    font-family: inherit;
    font-size: 1.5rem;
    ${flexRowCenter}
    background-color: ${(props) => props.theme.colors.CaramelLite};
    cursor: pointer;
  }

  .profile-info {
    ${flexRow}
  }
`
