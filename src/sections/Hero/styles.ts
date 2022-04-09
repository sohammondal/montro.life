import styled, { css } from 'styled-components'

import { H1 } from 'components'
import { flexColCenter, flexRow, media, textAlign } from 'theme'

export const containerStyles = {
  outer: css`
    min-height: 100vh;
    padding: 0 2rem;

    ${media.tabletPortrait} {
      ${flexColCenter}
      min-height: 50vh;
    }

    ${media.desktop} {
      min-height: 80vh;
      padding: 0;
    }
  `,
  inner: css`
    padding: 0;
    position: relative;
    ${flexColCenter}

    ${media.desktop} {
      ${flexRow}
      padding: 0px 22px;
      height: 100%;
    }

    ${media.custom(1366)} {
      justify-content: flex-start;
      padding: 0px;
    }
  `,
}

export const MediaBox = styled.div`
  width: 100%;
  padding-bottom: 20px;

  ${media.tabletPortrait} {
  }

  ${media.desktop} {
    position: relative;
    flex-basis: 50%;
    height: 100%;
    padding: 0;
  }
`

export const ContentBox = styled.div`
  flex: 1;
  order: 1;

  h4 {
    margin-bottom: ${(props) => props.theme.spacings['22']};
  }

  ${flexColCenter}

  ${media.tabletPortrait} {
    padding: 0;
  }

  ${media.desktop} {
    padding: 0;
    padding-left: 7%;
    flex-basis: 40%;
    align-items: flex-start;
    order: 0;

    h4 {
      ${textAlign.left}
      padding: 0;
      width: 80%;
    }
  }
`

export const HeroTitle = styled(H1)`
  margin-bottom: ${(props) => props.theme.spacings['22']};

  ${media.desktop} {
    ${textAlign.left}
  }
`
