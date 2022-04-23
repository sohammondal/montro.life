import styled, { css } from 'styled-components'

import { cursor, flexCol, flexRowCenter, hw, media } from 'theme'

export const containerStyles = {
  outerStyles: css`
    min-height: calc(100vh + 140px);
    padding: 0 2rem;

    ${media.tabletPortrait} {
      min-height: 30vh;
    }

    ${media.tabletLandscape} {
      min-height: 60vh;
    }

    ${media.desktop} {
      min-height: calc(70vh + 140px);
    }
  `,
  innerStyles: css`
    padding: 0;
    ${flexCol}

    ${media.tabletPortrait} {
      ${flexRowCenter}
      ${hw.full}
    }
  `,
}

export const MediaBox = styled.div`
  flex-basis: 40%;
  margin-right: 1%;
`

export const ContentBox = styled.article`
  flex-basis: 45%;
  margin-top: 22px;

  h1,
  h4 {
    margin-bottom: 22px;
  }

  ${media.tabletPortrait} {
    margin-top: unset;
    margin-left: 44px;
  }

  ${media.tabletLandscape} {
    margin-left: 0;
  }
`

export const Skills = styled.div`
  ${flexRowCenter}
  flex-wrap: wrap;
`

export const Skill = styled.div`
  padding: 5px 8px;
  border-radius: 27px;
  background-color: ${(props) => props.theme.colors.CaramelLite};
  margin: 10px 10px 0 0;

  .tooltip-wrapper {
    border-bottom: 0;
    width: 125px;
    .tooltip-content {
      left: 36%;
      top: 200%;
      width: 140px;
    }
    svg {
      font-size: x-small;
      background: white;
      border-radius: 50%;
      padding: 1px;
      ${cursor.pointer}
    }
  }
`
