import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.colors.White};
  border: 1px solid ${(props) => props.theme.colors.BridalHealth};
  box-sizing: border-box;
  border-radius: 34px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.Black};
  padding: 0 20px;

  :focus-visible {
    outline: none;
    color: ${(props) => props.theme.colors.Black};
  }
`

export const errorCss = css`
  height: 10px;
  color: ${(props) => props.theme.colors.Orange};
  margin: 5px 0 2px 10px;
`

export const labelCss = css`
  margin: 5px 0 2px 10px;
  color: ${(props) => props.theme.colors.Black};
`
