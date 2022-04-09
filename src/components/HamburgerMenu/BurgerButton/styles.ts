import styled, { css } from 'styled-components'

import { cursor, display, flexCol, hw, media } from 'theme'

export const Button = styled.button<{ $open: boolean }>`
  ${flexCol}
  align-items: flex-end;
  justify-content: space-around;
  ${hw.custom(2, 'rem')}
  background: transparent;
  border: none;
  ${cursor.pointer}
  padding: 0;
  z-index: 10;
  transform: scale(0.8);

  ${(props) =>
    props.$open &&
    css`
      position: absolute;
      top: -15px;
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
        background: ${(props) => props.theme.colors.Black};

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

        ${media.tabletLandscape} {
          transition: unset;
          ${$open ? display.none : display.flex};
        }
      `
    }}
  }
`
