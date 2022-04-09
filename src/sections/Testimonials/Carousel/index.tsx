/* eslint-disable @next/next/no-img-element */
import React from 'react'
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Pagination, Autoplay } from 'swiper'
import { SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import { Body, H3 } from 'components'

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
      autoplay={false}
      loop={false}
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
                <H3>{feedback}</H3>
              </Blockquote>
              <Cite>
                <Avatar>
                  <img src={image} width="100%" height="100%" alt="" />
                </Avatar>

                <Body bold font="Afterglow">
                  {name}
                </Body>

                <Body bold variant="md">
                  {title}
                </Body>
                <Socials>
                  {socials.map((social, idx) => (
                    <a key={`${name}-${social.name}-${idx}`}>
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
