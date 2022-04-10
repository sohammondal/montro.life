import styled from 'styled-components'

import { display, flexColCenter, media } from 'theme'

export const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  ${flexColCenter}
  text-align: center;
  span {
    ${display.none}
  }

  ${media.tabletLandscape} {
    span {
      ${display.inlineBlock}
      br {
        ${display.none}
      }
    }
  }
`
