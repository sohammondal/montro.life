import { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  border?: number
  boxshadow?: string
  fs?: boolean
  fit?: 'contain' | 'cover'
}

export const Image = styled.img<Props>`
  ${({ border }) => `border-radius: ${border}px`};
  box-shadow: ${(props) => props.boxshadow};
  ${(props) => (props.fs ? `width: 100%;` : '')}
  object-fit: ${(props) => props.fit};

  -webkit-user-drag: none;
`

Image.defaultProps = {
  border: 24,
  fit: 'cover',
}
