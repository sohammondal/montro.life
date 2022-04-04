import styled, { css } from 'styled-components'

import {
  display,
  flexCol,
  flexColCenter,
  flexRow,
  flexRowCenter,
  flexWrap,
  media,
} from 'theme'

export const containerStyles = {
  outerStyles: css`
    padding: 0 2rem;
    margin-top: -12%;
    background-color: ${(props) => props.theme.colors.Caramel};

    ${media.desktop} {
      margin-top: unset;
      padding: 30px 0;
    }
  `,
  innerStyles: css`
    padding: 0;
    padding-bottom: 75px;

    ${media.desktop} {
      ${flexRowCenter}
      justify-content: space-evenly;

      height: 80vh;
      padding-bottom: 150px;
    }
  `,
}

export const MediaBox = styled.div`
  flex-basis: 40%;
`

export const ContentBox = styled.div`
  height: 75vh;
  ${flexColCenter}
  justify-content: space-evenly;

  h1,
  h4 {
    align-self: flex-start;
    text-align: left;
  }

  button {
    background-color: ${(props) => props.theme.colors.BridalHealth};
    border-color: ${(props) => props.theme.colors.BridalHealth};
    :hover {
      border-color: black;
      color: black;
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
    `,
    Illustration: styled.div`
      position: relative;
      margin-right: 10px;
      ${display.flex}
      height: 50px;
      width: 50px;
    `,
    Content: styled.div`
      height: 100%;
      ${flexCol}
      justify-content: space-evenly;
      p:first-child {
        letter-spacing: 0.5px;
      }
    `,
  },
}
