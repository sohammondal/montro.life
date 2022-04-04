// import NextImage from 'next/image'
import { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

import { borderRadius } from 'theme'

// TODO - AWS Amplify not supporting next/image
/**
 * Alternative Solutions -
 * 1. Use Vercel (₹18K/year)
 * 2. Use AWS Elastic Beanstalk (https://javascript.plainenglish.io/how-to-make-next-js-image-optimization-work-on-aws-elastic-beanstalk-2776ea255eff)
 * 3. Use next-optimized-images (https://www.npmjs.com/package/next-optimized-images)
 */

/* interface Props {
  border?: string
  boxShadow?: string
  $css?: string
}

export const Image = styled(NextImage)<Props>`
  border-radius: ${(props) => props.border || '24px'};
  box-shadow: ${(props) =>
    props.boxShadow || '0px 4px 4px rgba(0, 0, 0, 0.25)'};

  ${(props) => props.$css}
`

Image.defaultProps = {
  objectFit: 'cover',
  width: 500,
  height: 500,
  layout: 'intrinsic',
} */

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  border?: number
  boxshadow?: string
  fs?: boolean
  fit?: 'contain' | 'cover'
}

export const Image = styled.img<Props>`
  ${({ border }) => borderRadius.custom(border)}
  box-shadow: ${(props) => props.boxshadow};
  ${(props) => (props.fs ? `width: 100%;` : '')}
  object-fit: ${(props) => props.fit};

  -webkit-user-drag: none;
`

Image.defaultProps = {
  border: 24,
  fit: 'cover',
}
