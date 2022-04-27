import { Spinner } from 'components'

import { StyledButton } from './styles'
import { Props } from './types'

export const Button: React.FC<Props> = ({ children, ...props }) => {
  const spinnerColor = props.variant === 'primary' ? 'white' : 'black'

  const btnProps = {
    ...props,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (props.isLoading || props.disabled) return
      props.onClick && props.onClick(e)
    },
  }

  return (
    <StyledButton {...btnProps}>
      {props.isLoading ? (
        <Spinner color={spinnerColor} size="25px" />
      ) : (
        children
      )}
    </StyledButton>
  )
}

Button.defaultProps = {
  variant: 'primary',
}
