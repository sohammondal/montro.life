import NextImage from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { Container } from 'components/Container'
import { HamburgerMenu } from 'components/HamburgerMenu'
import { Logo } from 'components/Logo'
import { sectionIds } from 'constant'
import { useAppContext } from 'context'
import { IOuterContainer } from 'types'

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
    href: `#${sectionIds.aboutAindrilla}`,
  },
  {
    title: 'Contact Us',
    href: `#${sectionIds.contactForm}`,
  },
]

const HomeNavBar = () => {
  const [menuItems, setMenuItems] = useState(navLinks)
  const { user } = useAppContext()

  useEffect(() => {
    const lastMenuItem = user?.username
      ? {
          title: 'Dashboard',
          href: '/dashboard',
        }
      : {
          title: 'Login',
          href: `${process.env.API_BASE_II}/api/connect/google`,
        }

    setMenuItems([...navLinks, lastMenuItem])
  }, [user])

  return (
    <Nav>
      <ul>
        {menuItems.map((link, idx) => (
          <li key={`nav-list-item-${idx}`}>
            <Link href={link.href || '#'}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <div className="hamburger-menu">
        <HamburgerMenu
          items={menuItems.map((link, idx) => (
            <Link key={`hamburger-item-${idx}`} href={link.href || '#'}>
              {link.title}
            </Link>
          ))}
        />
      </div>
    </Nav>
  )
}

export const Header: React.FC<IOuterContainer> = ({
  outerStyles,
  innerStyles,
  children,
  ...props
}) => {
  return (
    <>
      <Container
        outerStyles={[containerStyles.outerStyles, outerStyles]}
        innerStyles={[containerStyles.innerStyles, innerStyles]}
        {...props}
      >
        <LogoWrapper className="header-logo-wrapper">
          <NextImage
            src={'/images/blobs/logo-blob.png'}
            layout="responsive"
            objectFit="contain"
            width="100%"
            height="100%"
            priority
          />
          <Logo fill="black" />
        </LogoWrapper>
        {children || <HomeNavBar />}
      </Container>
      <hr />
    </>
  )
}
