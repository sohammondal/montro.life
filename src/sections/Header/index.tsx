import NextImage from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Container } from 'components'
import { HamburgerMenu } from 'components/HamburgerMenu'
import { Logo } from 'components/Logo'
import { sectionIds } from 'constant'

import { LogoWrapper, Nav, containerStyles } from './styles'

const navLinks = [
  {
    title: 'About Yoga',
    href: `#${sectionIds.aboutYoga}`,
  },
  {
    title: 'Testimonials',
    href: `#${sectionIds.testimonials}`,
  },
  {
    title: 'Trainers',
    href: `#${sectionIds.trainers}`,
  },
  {
    title: 'Contact Us',
    href: `#${sectionIds.contactForm}`,
  },
]

export const Header = () => {
  return (
    <>
      <Container {...containerStyles}>
        <LogoWrapper>
          <NextImage
            src={'/images/blobs/logo-blob.png'}
            layout="responsive"
            objectFit="contain"
            width="100%"
            height="100%"
          />
          <Logo fill="black" />
        </LogoWrapper>
        <Nav>
          <ul>
            {navLinks.map((link, idx) => (
              <li key={`nav-list-item-${idx}`}>
                <Link href={link.href || '#'}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className="hamburger-menu">
            <HamburgerMenu
              items={navLinks.map((link, idx) => (
                <Link key={`hamburger-item-${idx}`} href={link.href || '#'}>
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
