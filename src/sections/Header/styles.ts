import styled, { css } from 'styled-components'

import { display, flexRowCenter, media } from 'theme'

export const containerStyles = {
  outerStyles: css`
    padding: 25px 0;

    ${flexRowCenter}

    ${media.desktop} {
      padding: 0;
    }
  `,
  innerStyles: css`
    height: 7vh;
    padding: 1% 0;
    margin: 0;
    ${flexRowCenter}
    justify-content: space-between;

    ${media.tabletPortrait} {
      justify-content: center;
    }
  `,
}

export const BlobWrapper = styled.div`
  position: absolute;
  width: 21vw;
  height: 20vw;

  ${media.desktop} {
    top: -10%;
    left: -10%;
  }
`

export const LogoWrapper = styled.div`
  width: 20%;
  position: absolute;
  left: 5px;

  svg {
    fill: ${(props) => props.theme.colors.Black};
  }

  ${media.desktop} {
    top: 15px;
    left: -20px;
    width: 11%;
  }
`

export const Nav = styled.nav`
  position: absolute;
  right: 0;

  .hamburger-menu {
    margin: 0 20px;
  }

  ul {
    ${display.none}
  }

  ${media.desktop} {
    width: 85%;
    height: 100%;

    ul {
      ${flexRowCenter}
      justify-content: space-around;
      height: 100%;
    }

    .hamburger-menu {
      ${display.none}
    }
  }
`
