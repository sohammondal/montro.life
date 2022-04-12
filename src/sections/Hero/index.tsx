import NextImage from 'next/image'

import { Button, Container, H1, H4 } from 'components'
import { sectionIds } from 'constant'
import { scrollTo } from 'helpers'
import { IOuterContainer } from 'types'

import { ContentBox, MediaBox, containerStyles } from './styles'

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
        <H1>{props.title}</H1>
        {props.subtitle && <H4>{props.subtitle}</H4>}
        {props.cta && <Button {...props.cta} />}
      </ContentBox>
      <MediaBox>
        <NextImage
          width="100%"
          height="100%"
          src={'/images/yoga-pose-hero-3.png'}
          objectFit="contain"
          layout="responsive"
        />
      </MediaBox>
    </Container>
  )
}

Hero.defaultProps = {
  title: (
    <>
      Inhale the future, <br />
      exhale the past
    </>
  ),
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
