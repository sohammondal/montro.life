import styled from 'styled-components'

import { cursor, media, textAlign } from 'theme'

export const H1 = styled.h1`
  font-size: 2.25rem;
  line-height: 2.75rem;
  font-weight: unset;
  font-family: Afterglow;
  font-style: normal;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  ${cursor.default}
  ${textAlign.center}

  ${media.desktop} {
    font-size: 4rem;
    line-height: 4.5rem;
  }
`

export const H2 = styled.h2`
  font-size: 1.96875rem;
  line-height: 2.3rem;
  font-weight: unset;
  font-family: Afterglow;
  font-style: normal;
  margin: 0;

  ${cursor.default}
  ${textAlign.center}

  ${media.desktop} {
    font-size: 2.625rem;
    line-height: 3.125rem;
  }
`

export const H3 = styled.h3`
  font-size: 1.3125rem;
  line-height: 1.875rem;
  font-weight: unset;
  font-family: Afterglow;
  margin: 0;
  ${cursor.default}
  ${textAlign.center}

  ${media.desktop} {
    font-size: 2.25rem;
    line-height: 2.7rem;
  }
`

export const H4 = styled.h4<{ bold?: boolean; font?: string }>`
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: ${(props) => (props.bold ? 600 : 'normal')};
  font-family: ${(props) => props.font || 'Poppins'};
  margin: 0;
  ${cursor.default}
  ${textAlign.center}

  ${media.tabletPortrait} {
    font-size: 1.15rem;
    line-height: 1.5rem;
  }

  ${media.desktop} {
    font-size: 1.3125rem;
    line-height: 1.8375rem;
  }
`
