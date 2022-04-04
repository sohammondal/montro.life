import styled from 'styled-components'

import { flexCol, flexColCenter, flexRowCenter, media } from 'theme'

export const Container = styled.section`
  position: relative;
  .top-blob,
  .bottom-blob {
    position: absolute;
    z-index: 1;

    ${media.custom(1920)} {
      transform: scaleX(2);
    }
  }

  .top-blob {
    top: -1px;
  }

  .bottom-blob {
    bottom: -1px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 120vh;
  ${flexColCenter}
`
