import React from 'react'
import Waves from 'react-wavify'

import { Body, Button, Container, H1, H4, Image } from 'components'
import { sectionIds } from 'constant'
import { scrollTo } from 'helpers'
import yogaLineIcon1 from 'images/icons/yoga-line-icon-1.png'
import yogaLineIcon2 from 'images/icons/yoga-line-icon-2.png'
import yogaLineIcon3 from 'images/icons/yoga-line-icon-3.png'
import yogaLineIcon4 from 'images/icons/yoga-line-icon-4.png'
import aboutYoga from 'images/yoga-pose-3.png'
import { colors } from 'theme'
import { IOuterContainer } from 'types'

import { containerStyles, MediaBox, ContentBox, YogaPoses } from './styles'

export const yogaPoses = [
  {
    image: { src: yogaLineIcon1 },
    title: (
      <>
        Strong <br />
        Body
      </>
    ),
    subtitle: 'Lorem Ipsum Text',
  },
  {
    image: { src: yogaLineIcon2 },
    title: 'Increased Flexibility',
    subtitle: 'Lorem Ipsum Text',
  },
  {
    image: { src: yogaLineIcon3 },
    title: (
      <>
        Healthy <br />
        Lifestyle
      </>
    ),
    subtitle: 'Lorem Ipsum Text',
  },
  {
    image: { src: yogaLineIcon4 },
    title: (
      <>
        Live <br />
        Stress-free
      </>
    ),
    subtitle: 'Lorem Ipsum Text',
  },
]

const wavesProps = {
  fill: colors.Caramel,
  style: {
    display: 'flex',
  },
  paused: true,
  options: {
    height: 10,
    amplitude: 100,
    points: 3,
  },
}

export const KnowAboutYoga: React.FC<IOuterContainer> = (props) => {
  const images = props.images || {}
  return (
    <>
      <Waves {...wavesProps} id={sectionIds.aboutYoga} />
      <Container {...containerStyles}>
        <MediaBox>
          <Image
            {...images[sectionIds.aboutYoga]}
            src={aboutYoga}
            layout="intrinsic"
            width={500}
            height={500}
            objectFit="contain"
            alt="Aindrilla Das Cow Face pose (Gomukhasana)"
            placeholder="blur"
          />
        </MediaBox>
        <ContentBox>
          <H1>Know About Yoga</H1>
          <H4>
            Yoga means union of mind and body. We focus on bringing a perfect
            harmony between them. By practising yoga you can improve physical
            strength as well as increase flexibility.
          </H4>
          <YogaPoses.List>
            {yogaPoses.map((yogaPose, idx) => (
              <YogaPoses.Item.Wrapper key={`yoga-pose-${idx}`}>
                <YogaPoses.Item.Illustration>
                  <Image
                    layout="fill"
                    src={yogaPose.image.src}
                    alt={`yoga-illustration-${idx}`}
                  />
                </YogaPoses.Item.Illustration>
                <YogaPoses.Item.Content>
                  <Body bold font="Afterglow">
                    {yogaPose.title}
                  </Body>
                </YogaPoses.Item.Content>
              </YogaPoses.Item.Wrapper>
            ))}
          </YogaPoses.List>
          <Button
            onClick={() => scrollTo(sectionIds.testimonials)}
            variant="secondary"
          >
            Know More
          </Button>
        </ContentBox>
      </Container>
    </>
  )
}
