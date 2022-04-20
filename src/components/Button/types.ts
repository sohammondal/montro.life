import { ButtonHTMLAttributes } from 'react'

export type ButtonVariants = 'primary' | 'secondary'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  variant?: ButtonVariants
}
