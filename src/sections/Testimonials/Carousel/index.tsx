import NextImage from 'next/image'
import React from 'react'
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Pagination, Autoplay } from 'swiper'
import { SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

import { Body, H4 } from 'components'

import { testimonials } from './data'
import {
  Avatar,
  Blockquote,
  Cite,
  Slide,
  StyledSwiper,
  Socials,
} from './styles'

Swiper.use([Pagination, Autoplay])

export const Carousel: React.FC = () => {
  return (
    <StyledSwiper
      pagination={{ clickable: true }}
      autoplay
      loop
      spaceBetween={30}
      centeredSlides
    >
      {testimonials.map((testimonial, idx) => {
        const {
          feedback,
          sharedBy: { name, title, image, socials },
        } = testimonial
        return (
          <SwiperSlide key={`client-testimonial-${idx}`}>
            <Slide>
              <Blockquote>
                <H4>{feedback}</H4>
              </Blockquote>
              <Cite>
                <Avatar>
                  <NextImage
                    src={image}
                    layout="fixed"
                    objectFit="cover"
                    loading="eager"
                    width={100}
                    height={100}
                  />
                </Avatar>
                <Body bold font="Afterglow">
                  {name}
                </Body>
                <Body bold variant="md">
                  {title}
                </Body>
                <Socials>
                  {socials.map((social, idx) => (
                    <a
                      key={`${name}-${social.name}-${idx}`}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <social.icon />
                    </a>
                  ))}
                </Socials>
              </Cite>
            </Slide>
          </SwiperSlide>
        )
      })}
    </StyledSwiper>
  )
}
