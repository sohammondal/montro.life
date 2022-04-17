import styled, { css } from 'styled-components'

import { display, flexRowCenter, hw, media } from 'theme'

export const containerStyles = {
  outerStyles: css`
    padding: 25px 0;

    ${flexRowCenter}

    ${media.desktop} {
      padding: 0;
    }
  `,
  innerStyles: css`
    height: 3vh;
    padding: 1% 2%;
    margin: 0;
    ${flexRowCenter}
    justify-content: space-between;

    ${media.tabletPortrait} {
      padding: 1% 0;
      height: 3vh;
      justify-content: center;
    }

    ${media.tabletLandscape} {
      height: 2vh;
    }

    ${media.desktop} {
      height: 7vh;
    }
  `,
}

export const LogoWrapper = styled.div`
  position: relative;
  ${hw.custom(16, 'vw', 24)}

  svg {
    width: 100%;
    position: absolute;
    top: 6%;
    right: -6%;
    left: 0;
    bottom: 0;
    margin: 0 auto;
  }

  ${media.tabletPortrait} {
    ${hw.custom(20, 'vw', 21)}
    position: absolute;
    top: -1%;
    left: -11%;
    svg {
      width: 63%;
      top: -2%;
      right: -1%;
      left: unset;
      bottom: unset;
    }
  }

  ${media.tabletLandscape} {
    top: -5%;
    left: -10%;
    svg {
      width: 60%;
      top: 5%;
      right: 4%;
    }
  }

  ${media.desktop} {
    top: -10%;
    left: -10%;
    svg {
      width: 60%;
      top: 9%;
      right: 4%;
    }
  }
`

export const Nav = styled.nav`
  position: relative;
  ${hw.full}
  .hamburger-menu {
    float: right;
  }

  ul {
    ${display.none}
  }

  ${media.tabletPortrait} {
    position: absolute;
    right: 0;
    width: 90%;

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
