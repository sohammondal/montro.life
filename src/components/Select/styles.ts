import styled, { css } from 'styled-components'

import { media } from 'theme'

export const Wrapper = styled.div`
  position: relative;
`

export const LoaderWrapper = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const StyledSelect = styled.select<{ isLoading?: boolean }>`
  height: 40px;
  border: 1px solid ${(props) => props.theme.colors.Black};
  border-radius: 27px;
  padding: 0px 20px;
  width: 100%;
  font-family: AvenirReg;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.BuddhaGold};
  appearance: none;
  background: ${(props) =>
    props.isLoading
      ? 'none'
      : `url('/images/icons/down-arrow.png') 95% / 15px no-repeat ${props.theme.colors.White};`};
  :focus-visible {
    outline: none;
    color: ${(props) => props.theme.colors.Black};
  }
  ${media.tabletPortrait} {
    background-position-x: 97%;
    background-position-y: 17px;
  }
`

export const bodyStyles = css`
  height: 10px;
  color: ${(props) => props.theme.colors.Black};
  margin: 5px 0 2px 10px;
`
