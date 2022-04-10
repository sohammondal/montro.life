import NextImage from 'next/image'

import { Button, Container, H4 } from 'components'
import { sectionIds } from 'constant'
import { scrollTo } from 'helpers'
import { IOuterContainer } from 'types'

import { ContentBox, HeroTitle, MediaBox, containerStyles } from './styles'

interface Props extends IOuterContainer {
  title?: string | React.ReactElement
  subtitle?: string | React.ReactElement
  cta?: React.ComponentProps<typeof Button> | null
  headerBg?: 'white' | 'gray'
}

export const Hero: React.FC<Props> = (props) => {
  return (
    <Container
      bgColor={props.bgColor}
      outerStyles={containerStyles.outer}
      innerStyles={containerStyles.inner}
    >
      <ContentBox>
        <HeroTitle>{props.title}</HeroTitle>
        {props.subtitle && <H4>{props.subtitle}</H4>}
        {props.cta && <Button {...props.cta} />}
      </ContentBox>
      <MediaBox>
        <NextImage
          width="510px"
          height="560px"
          src={'/images/yoga-pose-hero-3.png'}
          objectFit="cover"
          layout="responsive"
        />
      </MediaBox>
    </Container>
  )
}

Hero.defaultProps = {
  title: 'Inhale the future, exhale the past',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id risus nec turpis feugiat ornare eu non sem. Nam molestie eleifend dui, id tristique lectus.',
  cta: {
    children: 'Learn More',
    onClick: () =>
      scrollTo(sectionIds.aboutYoga, {
        block: 'start',
      }),
  },
}
