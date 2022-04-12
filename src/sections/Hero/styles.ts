import styled, { css } from 'styled-components'

import { flexColCenter, flexRow, media, textAlign } from 'theme'

export const containerStyles = {
  outer: css`
    min-height: 100vh;
    padding: 0 2rem;

    ${media.tabletPortrait} {
      ${flexColCenter}
      min-height: 50vh;
    }

    ${media.tabletLandscape} {
      min-height: 80vh;
      padding: 0;
    }
  `,
  inner: css`
    padding: 0;
    position: relative;
    ${flexColCenter}

    ${media.tabletPortrait} {
      ${flexRow}
      padding: 0px 22px;
      height: 100%;
      justify-content: flex-start;
      padding: 0px;
    }
  `,
}

export const MediaBox = styled.div`
  width: 100%;
  padding-bottom: 20px;

  ${media.tabletPortrait} {
    position: relative;
    flex-basis: 50%;
    height: 100%;
    padding: 0;
  }
`

export const ContentBox = styled.div`
  flex: 1;
  order: 1;

  h1,
  h4 {
    margin-bottom: 22px;
  }

  ${flexColCenter}

  ${media.tabletPortrait} {
    padding: 0;
    padding-left: 5%;
    order: 0;
    flex-basis: 40%;
    align-items: flex-start;
    h1,
    h4 {
      ${textAlign.left}
    }
    h4 {
      padding: 0;
      width: 80%;
    }
  }

  ${media.tabletLandscape} {
    padding-left: 7%;
  }
`
