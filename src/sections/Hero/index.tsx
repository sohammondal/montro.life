import { Button, Container, H1, H4, Image } from 'components'
import { sectionIds } from 'constant'
import { scrollTo } from 'helpers'
import yogaPoseHero from 'images/yoga-pose-hero.png'
import { IOuterContainer } from 'types'

import { ContentBox, MediaBox, containerStyles } from './styles'

interface Props extends IOuterContainer {
  title?: string | React.ReactElement
  subtitle?: string | React.ReactElement
  cta?: React.ComponentProps<typeof Button> | null
  headerBg?: 'white' | 'gray'
}

export const Hero: React.FC<Props> = (props) => {
  const images = props.images || {}
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
        <Image
          {...images.hero}
          width={600}
          height={600}
          src={yogaPoseHero}
          objectFit="contain"
          layout="intrinsic"
          priority
          alt="Aindrilla Das doing One legged King Pegion pose (Eka pada rajakopatasana)"
          placeholder="blur"
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
  subtitle: (
    <>
      Make that the montro of your life <br />
      and let us help you attain tranquillity
    </>
  ),
  cta: {
    children: 'Learn More',
    onClick: () =>
      scrollTo(sectionIds.aboutYoga, {
        block: 'start',
      }),
  },
}
