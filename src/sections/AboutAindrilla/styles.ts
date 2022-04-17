import styled, { css } from 'styled-components'

import { flexRowCenter, hw, media } from 'theme'

export const containerStyles = {
  outerStyles: css`
    min-height: 100vh;

    ${media.tabletPortrait} {
      min-height: unset;
    }

    ${media.tabletLandscape} {
      height: 100vh;
    }
  `,
  innerStyles: css`
    padding: 0;
    ${flexRowCenter}
    ${hw.full}
  `,
}

export const MediaBox = styled.div`
  flex-basis: 40%;
`

export const ContentBox = styled.div`
  flex-basis: 45%;
  h1 {
    small {
      font-size: 2.5rem;
    }
  }

  p:first-of-type {
    opacity: 0.7;
    text-align: center;
    margin-bottom: 22px;
  }

  h4 {
    margin-bottom: 22px;
  }
`

export const Skills = styled.div`
  ${flexRowCenter}
  flex-wrap: wrap;
`

export const Skill = styled.div`
  padding: 0 10px;
  border-radius: 27px;
  background-color: ${(props) => props.theme.colors.CaramelLite};
  margin: 10px 10px 0 0;
`
