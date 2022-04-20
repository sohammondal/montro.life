import { Spinner } from 'components'

import { StyledButton } from './styles'
import { Props } from './types'

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {props.isLoading ? <Spinner color="white" size="25px" /> : children}
    </StyledButton>
  )
}

Button.defaultProps = {
  variant: 'primary',
}
