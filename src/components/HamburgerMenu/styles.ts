import styled from 'styled-components'

import { flexColCenter } from 'theme'

export const Menu = styled.div`
  width: 100%;
  ${flexColCenter}
  background-color: ${(props) => props.theme.colors.primary};
  color: white;

  @media only screen and (min-width: 1024px) {
    width: 30%;
  }
`

export const MenuItem = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  text-align: center;
`

export const Overlay = styled.div<{ $open: boolean }>`
  /* width: 100vw;
  height: 100vh; */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  transform: ${({ $open }) => ($open ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform ease 0.5s;
`
