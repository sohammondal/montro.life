import styled, { css } from 'styled-components'

import { cursor, display, flexCol, flexColCenter, flexWrap, media } from 'theme'

export const outerContainerStyles = css`
  ${media.tabletPortrait} {
    padding-bottom: ${(props) => props.theme.spacings['132']};
  }
`

export const Row = styled.div`
  margin-top: ${(props) => props.theme.spacings['22']};
  ${flexCol}

  ${media.tabletPortrait} {
    flex-direction: row;
    justify-content: space-between;
    ${flexWrap.no}

    & > div:not(:last-child) {
      margin-right: ${(props) => props.theme.spacings['44']};
    }
  }
`

export const Cols = {
  One: styled.div`
    order: 1;
  `,
  Two: styled.div`
    order: 3;
    margin-top: ${(props) => props.theme.spacings['22']};

    ${media.tabletPortrait} {
      margin-top: 0;
      order: 2;
    }
  `,
  Three: styled.div`
    order: 4;

    ${media.tabletPortrait} {
      order: 3;
    }
  `,
  Four: styled.div`
    order: 5;

    ${media.tabletPortrait} {
      order: 4;
    }
  `,
  Five: styled.div`
    order: 2;
    margin-top: ${(props) => props.theme.spacings['44']};

    ${media.tabletPortrait} {
      margin-top: 0;
      order: 5;
    }
  `,
  headingStyles: css`
    margin-bottom: ${(props) => props.theme.spacings['11']};

    ${media.tabletPortrait} {
      margin-bottom: ${(props) => props.theme.spacings['22']};
      ${display.block}
    }
  `,
}

export const copyStyles = css`
  margin: ${({ theme: { spacings } }) =>
    `${spacings['18']} 0 ${spacings['44']}`};
`

export const Socials = {
  Wrapper: styled.div`
    ${display.flex}
  `,
  Btn: styled.a`
    border-radius: 50%;
    position: relative;
    ${flexColCenter}
    width: 35px;
    height: 35px;

    ${({ theme: { colors } }) =>
      css`
        background: ${colors.primary};
        color: ${colors.BridalHealth};
      `}

    &:hover {
      color: ${(props) => props.theme.colors.BridalHealth};
    }

    & > svg {
      width: 17px;
      height: 17px;
    }

    &:not(:last-child) {
      margin-right: ${(props) => props.theme.spacings['11']};
    }
  `,
}

export const List = styled.ul`
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacings['11']};
  }
`

export const Newsletter = styled.div`
  ${display.flex}
  margin-top: ${(props) => props.theme.spacings['18']};

  ${media.tabletPortrait} {
    ${flexWrap.yes}
  }

  & > button {
    margin-left: 5px;
  }
`
export const addressTitleStyles = css`
  margin-top: ${(props) => props.theme.spacings['18']};
`

export const Address = styled.address`
  max-width: 300px;
  margin-top: ${(props) => props.theme.spacings['18']};
  font-style: normal;
  font-size: 1rem;
  line-height: 1.3rem;
  ${cursor.default}
`

export const thankYouMessage = css`
  display: inline-block;
  margin-top: ${(props) => props.theme.spacings['18']};
  color: ${(props) => props.theme.colors.primary};
`

export const bodyStyles = css`
  line-height: 1.5rem;
`
