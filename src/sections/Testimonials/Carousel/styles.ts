import styled, { css } from 'styled-components'
import { Swiper } from 'swiper/react'

import {
  cursor,
  display,
  flexColCenter,
  flexRowCenter,
  hw,
  media,
  textAlign,
} from 'theme'

export const StyledSwiper = styled(Swiper)`
  ${hw.full}

  --swiper-theme-color: white;
  --swiper-pagination-bullet-inactive-color: white;
  --swiper-pagination-bullet-inactive-opacity: 0.5;

  .swiper-pagination-bullets {
    bottom: 10rem;
  }

  .swiper-slide {
    ${flexRowCenter}
  }
`

export const Slide = styled.div`
  ${hw.custom(50, '%', 65)}

  ${flexColCenter}
  justify-content: space-evenly;

  background-color: ${(props) => props.theme.colors.CaramelLite};
  padding: 50px;
  border-radius: 27px;

  ${media.desktop} {
    ${hw.half}
    justify-content: center;
    > * {
      margin: 8px 0;
    }
  }
`

export const Blockquote = styled.blockquote`
  max-width: 600px;

  position: relative;
  margin: 0;
  padding: 0.5rem;
  ${cursor.default}

  &::before,
  &::after {
    position: absolute;
    color: ${(props) => props.theme.colors.BridalHealth};
    font-size: 6rem;
    ${hw.custom(3, 'rem')}
    ${media.desktop} {
      font-size: 8rem;
      ${hw.custom(4, 'rem')}
    }
  }

  &::before {
    content: '“';
    left: -3rem;
    top: -2rem;
    ${media.desktop} {
      left: -4rem;
      top: -2rem;
    }
  }

  &::after {
    content: '”';
    right: -3rem;
    bottom: 1rem;
    ${media.desktop} {
      right: -4rem;
      bottom: 1rem;
    }
  }
`

export const Cite = styled.cite`
  ${textAlign.center}
  > * {
    margin: 3px 0;
  }
`

export const Avatar = styled.div`
  position: relative;
  ${hw.custom(100, 'px')}
  border-radius: 50%;
  overflow: hidden;
`

export const Socials = styled.span`
  ${flexRowCenter}

  a {
    margin: 2.5px;
    border-radius: 50%;
    ${hw.custom(20, 'px')}
    background-color: ${(props) => props.theme.colors.Caramel};
    ${flexRowCenter}

    svg {
      ${hw.custom(10, 'px')}
      transition: 0.5s ease;
    }

    ::before {
      display: none;
    }

    :hover {
      background-color: ${(props) => props.theme.colors.BridalHealth};
    }
  }
`
