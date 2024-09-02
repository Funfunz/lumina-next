import { forwardRef } from 'react'
import { TLumButton } from './buttonTypes'
import { ButtonAsButton, ButtonAsExternalLink, ButtonAsLink } from './buttonVariants'

export type { TLumButton }

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, TLumButton>(
  (props, ref) => {
    const { variant: buttonType } = props

    if (buttonType === 'default') {
      return <ButtonAsButton {...props} ref={ref as React.Ref<HTMLButtonElement>} />
    } else if (buttonType === 'externalLink') {
      return <ButtonAsExternalLink {...props} ref={ref as React.Ref<HTMLAnchorElement>} />
    } else if (buttonType === 'link') {
      return <ButtonAsLink {...props} ref={ref as React.Ref<HTMLAnchorElement>} />
    } else {
      return null
    }
  }
)

Button.displayName = 'Button'
