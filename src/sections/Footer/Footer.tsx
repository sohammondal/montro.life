import NextImage from 'next/image'
import Wave from 'react-wavify'

import { Container, Logo as AppLogo } from 'components'
import { sectionIds } from 'constant'
import { IOuterContainer } from 'types'

import { links, Item } from './config'
import { ContactForm } from './ContactForm'
import { Copyright } from './Copyright'
import {
  StyledFooter,
  Logo,
  containerStyles,
  FooterContent,
  Divider,
} from './styles'

const itemRenderer = (item: Item, key: number, horizontal = false) => (
  <li key={`${item?.text}-${key}`}>
    {item?.Icon && !horizontal && <item.Icon />}
    {item?.Icon && horizontal && (
      <a href={item?.href} data-has-href={!!item?.href}>
        <item.Icon />
      </a>
    )}
    {item?.text && !horizontal && (
      <a href={item?.href} data-has-href={!!item?.href}>
        {item.text}
      </a>
    )}
    {item?.items?.length && (
      <ul className="horizontal-list">
        {item?.items?.map((item, key) => itemRenderer(item, key, true))}
      </ul>
    )}
  </li>
)

export const Footer: React.FC<IOuterContainer> = ({ bgColor }) => {
  return (
    <StyledFooter id={sectionIds.contactForm}>
      <Wave
        className="footer-blob"
        paused
        options={{
          height: 20,
          amplitude: 100,
          points: 5,
        }}
      />
      <Container divider {...containerStyles} bgColor={bgColor}>
        <Logo.Box>
          <Logo.Wrapper>
            <NextImage
              src={'/images/blob.png'}
              layout="fill"
              objectFit="contain"
              className="blob-bg"
            />
            <AppLogo fill="black" />
          </Logo.Wrapper>
        </Logo.Box>
        <FooterContent.Wrapper>
          <FooterContent.LeftSection>
            {links.map((link) => {
              return (
                <ul key={link.title} className="vertical-list">
                  {link.title}
                  {link.items.map((item, key) => itemRenderer(item, key))}
                </ul>
              )
            })}
            <Copyright />
          </FooterContent.LeftSection>
          <Divider />
          <FooterContent.RightSection>
            <ContactForm />
          </FooterContent.RightSection>
        </FooterContent.Wrapper>
      </Container>
    </StyledFooter>
  )
}

Footer.defaultProps = {
  bgColor: 'primary',
}
