import NextImage from 'next/image'
import React from 'react'
import Waves from 'react-wavify'

import { Body, Button, Container, H1, H4 } from 'components'
import { sectionIds } from 'constant'
import { scrollTo } from 'helpers'
import { colors } from 'theme'

import { yogaPoses } from './data'
import { containerStyles, MediaBox, ContentBox, YogaPoses } from './styles'

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

export const KnowAboutYoga = () => {
  return (
    <>
      <Waves {...wavesProps} id={sectionIds.aboutYoga} />
      <Container {...containerStyles}>
        <MediaBox>
          <NextImage
            src={`/images/yoga-pose-3.png`}
            layout="responsive"
            width={500}
            height={600}
            objectFit="contain"
          />
        </MediaBox>
        <ContentBox>
          <H1>Know About Yoga</H1>
          <H4>
            Aenean nunc augue, volutpat id massa sed, facilisis efficitur nisl
            orci nulla, efficitur id ante at, finibus consequat sapien. Nulla
            fermen vel purus at mollis sed malesuada laoreet quam.
          </H4>
          <YogaPoses.List>
            {yogaPoses.map((yogaPose, idx) => (
              <YogaPoses.Item.Wrapper key={`yoga-pose-${idx}`}>
                <YogaPoses.Item.Illustration>
                  <NextImage src={yogaPose.image.src} layout="fill" />
                </YogaPoses.Item.Illustration>
                <YogaPoses.Item.Content>
                  <Body bold font="Afterglow">
                    {yogaPose.title}
                  </Body>
                  <Body variant="sm">{yogaPose.subtitle}</Body>
                </YogaPoses.Item.Content>
              </YogaPoses.Item.Wrapper>
            ))}
          </YogaPoses.List>
          <Button onClick={() => scrollTo(sectionIds.trainers)}>
            Know More
          </Button>
        </ContentBox>
      </Container>
    </>
  )
}
