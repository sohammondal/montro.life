import styled from 'styled-components'

import { media } from 'theme'

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  li {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    align-items: stretch;
    p {
      margin: 5px;
    }
    > p:nth-child(1) {
      text-align: center;
      text-decoration: underline;
      ${media.tabletLandscape} {
        text-align: left;
      }
    }
    div {
      display: flex;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 50%;
        ${media.tabletLandscape} {
          justify-content: unset;
        }
      }
    }
  }

  ${media.tabletPortrait} {
    width: 40%;
  }

  ${media.tabletLandscape} {
    width: 25%;
  }
`
