import styled from 'styled-components'

import { flexColCenter, media } from 'theme'

export const Container = styled.section`
  position: relative;
  height: 150vh;

  ${media.tabletPortrait} {
    height: 85vh;
  }

  ${media.tabletLandscape} {
    height: 120vh;
  }

  ${media.desktop} {
    height: 150vh;
  }

  .blob {
    display: flex !important;
    position: absolute;
    z-index: 1;
    svg {
      background-color: transparent;
    }
  }

  .top-blob {
    top: -1px;
    transform: rotate(180deg);
  }

  .bottom-blob {
    bottom: -1px;
  }

  .react-parallax {
    height: 100%;
    .react-parallax-content {
      height: 100%;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  ${flexColCenter}
`
