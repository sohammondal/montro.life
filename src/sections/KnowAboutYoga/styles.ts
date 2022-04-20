import styled, { css } from 'styled-components'

import {
  display,
  flexCol,
  flexColCenter,
  flexRow,
  flexRowCenter,
  flexWrap,
  hw,
  media,
} from 'theme'

export const containerStyles = {
  outerStyles: css`
    padding: 0 2rem;
    margin-top: -4%;
    background-color: ${(props) => props.theme.colors.Caramel};

    ${media.tabletPortrait} {
      margin-top: unset;
    }

    ${media.tabletLandscape} {
      margin-top: -1%;
    }

    ${media.desktop} {
      padding: 30px 0;
    }
  `,
  innerStyles: css`
    padding: 0;

    ${media.tabletPortrait} {
      ${flexRowCenter}
    }

    ${media.desktop} {
      justify-content: space-evenly;
      height: 70vh;
      padding-bottom: 60px;
    }
  `,
}

export const MediaBox = styled.div`
  flex-basis: 40%;
`

export const ContentBox = styled.div`
  ${flexColCenter}
  justify-content: space-evenly;
  flex-basis: 50%;

  > * {
    margin-bottom: 22px;
  }

  h1,
  h4 {
    align-self: flex-start;
    text-align: left;
  }

  ${media.tabletLandscape} {
    flex-basis: 45%;
    height: 75vh;
    > * {
      margin-bottom: unset;
    }
  }

  ${media.desktop} {
    flex-basis: 40%;
    height: 100%;
  }
`

export const YogaPoses = {
  List: styled.div`
    ${flexRow}
    justify-content: space-evenly;
    ${flexWrap.yes}
    min-height: 130px;
  `,
  Item: {
    Wrapper: styled.div`
      ${flexRowCenter}
      justify-content: flex-start;
      width: 227px;
      flex-basis: 50%;
      margin-bottom: 1rem;

      ${media.tabletLandscape} {
        margin-bottom: 0;
      }
    `,
    Illustration: styled.div`
      position: relative;
      margin-right: 10px;
      ${display.flex}
      ${hw.custom(50, 'px')}
    `,
    Content: styled.div`
      height: 100%;
      ${flexCol}
      justify-content: space-evenly;
      p:first-child {
        letter-spacing: 0.5px;
      }

      ${media.tabletLandscape} {
        p:first-child {
          br {
            ${display.none}
          }
        }
      }
    `,
  },
}
