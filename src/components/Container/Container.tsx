import React from 'react'
import styled, { css } from 'styled-components'

import { media } from 'theme'
import { IOuterContainer } from 'types'

export const InnerContainer = styled.div`
  max-width: 1280px;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${media.custom(1281)} {
    padding: 0;
  }
`

export const OuterContainer = styled.section<IOuterContainer>`
  ${({ theme: { spacings, colors }, bgColor }) => css`
    padding: ${spacings['30']} 0;

    background-color: ${bgColor === 'primary'
      ? colors.Caramel
      : colors.BridalHealth};

    ${media.tabletPortrait} {
      padding: ${spacings['44']} 0;
    }

    ${media.desktop} {
      padding: 0;
    }
  `}
`

export const Container: React.FC<IOuterContainer> = ({
  outerStyles,
  innerStyles,
  bgColor,
  children,
  id,
}) => {
  return (
    <>
      <OuterContainer bgColor={bgColor} css={outerStyles}>
        <InnerContainer id={id} css={innerStyles}>
          {children}
        </InnerContainer>
      </OuterContainer>
    </>
  )
}

Container.defaultProps = {
  divider: false,
  dividerStyles: '',
  bgColor: 'secondary',
}
