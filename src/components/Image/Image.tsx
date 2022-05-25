import NxtImg, { ImageProps } from 'next/image'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import styled, { css, CSSProp } from 'styled-components'

interface WrapperProps {
  wrapperStyles?: CSSProp
  border?: number | string
  boxshadow?: string
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  ${({ border }) => border}
  box-shadow: ${(props) => props.boxshadow};
  overflow: hidden;

  -webkit-user-drag: none;
  width: 100%;
  height: 100%;

  & > div {
    z-index: 2;
  }
`

const skeletonStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  max-height: 100%;
  z-index: 1;
`

export const Image: React.FC<WrapperProps & ImageProps> = ({
  wrapperStyles,
  boxshadow,
  border,
  layout,
  width,
  height,
  ...props
}) => {
  const [loading, setLoading] = useState(true)

  const nextImgProps =
    layout !== 'fill'
      ? { layout, width, height, ...props }
      : { layout, ...props }

  return (
    <Wrapper css={wrapperStyles} boxshadow={boxshadow} border={border}>
      <NxtImg onLoadingComplete={() => setLoading(false)} {...nextImgProps} />
      {loading && (
        <Skeleton
          width="100%"
          height="100%"
          borderRadius="inherit"
          css={skeletonStyles}
        />
      )}
    </Wrapper>
  )
}

Image.defaultProps = {
  objectFit: 'cover',
  alt: '',
  border: '24px',
  layout: 'responsive',
  width: '100%',
  height: '100%',
  quality: 100,
}
