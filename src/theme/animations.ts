import { fadeInLeft, fadeInRight, fadeInDown, fadeInUp } from 'react-animations'
import { keyframes } from 'styled-components'

export const fadeAnim = {
  inUp: keyframes`${fadeInUp}`,
  inDown: keyframes`${fadeInDown}`,
  inLeft: keyframes`${fadeInLeft}`,
  inRight: keyframes`${fadeInRight}`,
}
