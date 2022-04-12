import styled, { css } from 'styled-components'

import {
  cursor,
  display,
  flexCol,
  flexColCenter,
  flexRow,
  flexRowCenter,
  flexWrap,
  hw,
  media,
} from 'theme'

export const StyledFooter = styled.footer`
  position: relative;
  .footer-blob {
    display: flex !important;
    svg {
      background-color: transparent;
      path {
        fill: ${(props) => props.theme.colors.CaramelLite};
      }
    }
  }
`

export const containerStyles = {
  outerStyles: css`
    min-height: 80vh;
    background-color: ${(props) => props.theme.colors.CaramelLite};
    position: relative;
  `,
  innerStyles: css`
    padding: 0;
    ${media.tabletLandscape} {
      padding: 0 20px;
    }
  `,
}

export const Logo = {
  Box: styled.div`
    ${flexRowCenter}
    position: absolute;
    width: 100%;
    top: -6.25rem;
    left: 0;

    ${media.tabletLandscape} {
    }
  `,
  Wrapper: styled.div`
    position: relative;
    ${hw.custom(7, 'rem')}
    ${flexRowCenter}
    svg {
      position: absolute;
      z-index: 1;
      ${hw.custom(10, 'rem')}
    }
  `,
}

export const FooterContent = {
  Wrapper: styled.div`
    ${flexColCenter}
    padding-top: 3rem;

    ${media.tabletLandscape} {
      flex-direction: row;
      align-items: flex-start;
      padding-top: 7rem;
    }
  `,
  LeftSection: styled.div`
    ${flexCol}

    > .vertical-list {
      font-size: 1.2rem;
      font-weight: bold;
      font-family: Afterglow;
      letter-spacing: 0.5px;
      margin-top: 1.5rem;

      ${cursor.default}

      > li {
        font-size: 0.9rem;
        font-weight: normal;
        margin-bottom: 10px;
        font-family: Poppins;
        letter-spacing: unset;

        ${flexRowCenter}
        justify-content: flex-start;

        > svg {
          margin-right: 10px;
        }

        a[data-has-href='false'] {
          ${cursor.default}
          :before {
            display: none;
          }
        }
      }

      > li:first-child {
        margin-top: 1.3rem;
      }

      .horizontal-list {
        ${display.flex}
        margin-top: 15px;
        letter-spacing: unset;

        a {
          background-color: ${(props) => props.theme.colors.BridalHealth};
          ${hw.custom(25, 'px')}
          border-radius: 50%;
          ${flexRowCenter}
          margin-right: 10px;
          :before {
            ${display.none}
          }
          svg {
            transition: all ease 0.2s;
            ${hw.custom(15, 'px')}
          }

          :hover {
            transform: scale(1.2);
          }
        }
      }
    }

    ${media.tabletLandscape} {
      flex-basis: 55%;
      ${flexRow}
      ${flexWrap.yes}
      justify-content: space-between;
      align-content: space-between;
      height: 52vh;

      > .vertical-list {
        margin-top: 0;
        margin-right: 3.5rem;
      }
    }
  `,
  RightSection: styled.div`
    flex-basis: 35%;
  `,
}

export const Divider = styled.div`
  margin: 2rem 0;
  width: 80vw;
  border-bottom: 1px solid ${(props) => props.theme.colors.Black};

  ${media.tabletLandscape} {
    margin: 0;
    width: 0;
    height: 50vh;
    border-bottom: unset;
    border-left: 1px solid ${(props) => props.theme.colors.Black};
  }
`
