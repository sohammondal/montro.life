import NextImage from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Container } from 'components'
import { HamburgerMenu } from 'components/HamburgerMenu'
import { Logo } from 'components/Logo'

import { LogoWrapper, BlobWrapper, Nav, containerStyles } from './styles'

const navLinks = [
  {
    title: 'About Yoga',
  },
  {
    title: 'Gallery',
  },
  {
    title: 'Testimonials',
  },
  {
    title: 'Trainers',
  },
  {
    title: 'Contact Us',
  },
]

export const Header = () => {
  return (
    <>
      <Container {...containerStyles}>
        <BlobWrapper>
          <NextImage
            src={'/images/blob.png'}
            layout="fill"
            objectFit={'cover'}
            className="blob-bg"
          />
        </BlobWrapper>
        <LogoWrapper>
          <Logo fill="black" />
        </LogoWrapper>
        <Nav>
          <ul>
            {navLinks.map((link, idx) => (
              <li key={`nav-list-item-${idx}`}>
                <Link href="/">{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className="hamburger-menu">
            <HamburgerMenu
              items={navLinks.map((link, idx) => (
                <Link key={`hamburger-item-${idx}`} href="/">
                  {link.title}
                </Link>
              ))}
            />
          </div>
        </Nav>
      </Container>
      <hr />
    </>
  )
}
