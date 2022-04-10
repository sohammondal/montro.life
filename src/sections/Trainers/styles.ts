import styled, { css } from 'styled-components'

import { flexCol, flexColCenter, flexRow, hw, media } from 'theme'

export const containerStyles = {
  outerStyles: css`
    min-height: 100vh;
    ${media.tabletLandscape} {
      height: 100vh;
    }
  `,
  innerStyles: css`
    padding: 0;
    ${flexCol}
    ${hw.full}
  `,
}

export const Wrapper = styled.div`
  ${flexCol}
  align-items: center;
  margin-top: 3rem;

  ${media.tabletLandscape} {
    ${flexRow}
    justify-content: space-evenly;

    ${hw.full}
    margin-top: unset;
  }
`

export const Trainer = {
  Card: styled.div`
    ${hw.custom(20, 'rem', 14)}
    border-radius: 27px;
    background-color: ${(props) => props.theme.colors.Caramel};
    overflow: hidden;
    ${flexCol}
    transition: 0.5s ease;
    margin-top: 1rem;
    :hover {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    ${media.tabletLandscape} {
      ${hw.custom(25, 'rem', 19)}
      margin-top: 1rem;
    }
  `,
  Image: styled.figure`
    position: relative;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    color: ${(props) => props.theme.colors.BridalHealth};
  `,
  Content: styled.div`
    height: 100%;
    ${flexColCenter}
    h4 {
      letter-spacing: 0.5px;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.8rem;
      text-align: center;
      font-style: italic;
    }
  `,
}
