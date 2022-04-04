import Link from 'next/link'
import { useState } from 'react'

import { Body, Button, Container, Image, Input } from 'components'
import { config } from 'constant'
import { IOuterContainer } from 'types'

import { addresses, legal, quickLinks, socials } from './config'
import {
  Address,
  addressTitleStyles,
  bodyStyles,
  Cols,
  copyStyles,
  List,
  ListItem,
  Newsletter,
  outerContainerStyles,
  Row,
  Socials,
  thankYouMessage,
} from './styles'

export const Footer: React.FC<IOuterContainer> = ({ bgColor }) => {
  const [submitted, setSubmitted] = useState(false)
  return (
    <footer>
      <Container divider outerStyles={outerContainerStyles} bgColor={bgColor}>
        <Link href="/" passHref>
          <a>
            <Image
              alt="oh-logo-large"
              border={0}
              boxshadow="none"
              width={196}
              height={33}
              src={`${config.ASSETS_URL}/logos/logo.full.orange.png`}
            />
          </a>
        </Link>
        <Row>
          <Cols.One>
            <Body css={bodyStyles}>
              <a href="tel:+918861115000">+91 886 111 5000</a>
              <br />
              <a href="mailto:hello@openhouse.study">hello@openhouse.study</a>
              <br />
              {addresses
                .map((location) => location.title.toLowerCase())
                .join(' | ')}
            </Body>
            <Body css={[copyStyles, bodyStyles]}>
              Copyright &copy; {new Date().getFullYear()}
              <br />
              Openhouse
              <br />
              All rights reserved
            </Body>
            <Body css={Cols.headingStyles} variant="lg" bold>
              Stay Connected
            </Body>
            <Socials.Wrapper>
              {socials.map(({ name, href, icon: Icon }) => (
                <Socials.Btn key={name} href={href}>
                  <Icon />
                </Socials.Btn>
              ))}
            </Socials.Wrapper>
          </Cols.One>
          <Cols.Two>
            <Body css={Cols.headingStyles} variant="lg" bold>
              Quick Links
            </Body>
            <List>
              {quickLinks.map(({ name, href }) => (
                <ListItem key={name}>
                  <Link href={href}>{name}</Link>
                </ListItem>
              ))}
            </List>
          </Cols.Two>
          <Cols.Three>
            <Body css={Cols.headingStyles} variant="lg" bold>
              Legal
            </Body>
            <List>
              {legal.map(({ name, href }) => (
                <ListItem key={name}>
                  <Link href={href}>{name}</Link>
                </ListItem>
              ))}
            </List>
          </Cols.Three>
          <Cols.Four>
            <Body css={Cols.headingStyles} variant="lg" bold>
              Classes
            </Body>
            <List>
              <ListItem>
                <Link href={'/'}>Name</Link>
              </ListItem>
            </List>
          </Cols.Four>
          <Cols.Five>
            <Body bold>Sign up for our newsletter</Body>
            {!submitted ? (
              <Newsletter>
                <Input />
                <Button>Sign Up</Button>
              </Newsletter>
            ) : (
              <Body bold>
                <span css={thankYouMessage}>Thank you,</span>
                <br />
                Your form has been submitted
              </Body>
            )}
            {addresses.map(({ title, address }) => (
              <div key={title}>
                <Body bold css={addressTitleStyles}>
                  {title} Office
                </Body>
                <Address>{address}</Address>
              </div>
            ))}
          </Cols.Five>
        </Row>
      </Container>
    </footer>
  )
}

Footer.defaultProps = {
  bgColor: 'gray',
}
