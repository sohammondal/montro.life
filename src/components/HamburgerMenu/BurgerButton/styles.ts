import styled, { css } from 'styled-components'

export const Button = styled.button<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transform: scale(0.8);

  ${(props) =>
    props.$open &&
    css`
      position: absolute;
      top: 25px;
      right: 15px;
    `}

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;

    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    ${({ $open }) => {
      return css`
        background: ${(props) =>
          $open ? props.theme.colors.White : props.theme.colors.primary};

        :first-child {
          transform: ${$open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
          width: 1.5rem;
          opacity: ${$open ? '0' : '1'};
          transform: ${$open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
          transform: ${$open ? 'rotate(-45deg)' : 'rotate(0)'};
        }

        @media only screen and (min-width: 1024px) {
          transition: unset;
          display: ${$open ? 'none' : 'flex'};
        }
      `
    }}
  }
`
