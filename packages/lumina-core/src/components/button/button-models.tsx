// Ideas taken from https://dev.to/frehner/polymorphic-button-component-in-typescript-c28

import { MutableRefObject } from 'react'

type TLumButtonBase = {
  className?: string
  text?: string
  iconLeft?: string
  iconRight?: string
  style?: 'primary' | 'secondary' | 'warning' | 'danger' | 'filter' | 'live' | 'menuButton' | string
  size?: 'small' | 'large' | string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  ref?: MutableRefObject<HTMLButtonElement | null>
  type?: 'button' | 'submit' | 'reset'
}

export type TLumButtonAsButton = TLumButtonBase & {
  buttonType: 'button'
  isFullWidth?: boolean
}

type TLumButtonLinkBase = TLumButtonBase & {
  target?: string
  href: string
}

type TLumButtonExternalLink = TLumButtonLinkBase & {
  buttonType: 'externalLink'
}

type TLumButtonLink = TLumButtonLinkBase & {
  buttonType: 'link'
}

export type TLumButton = TLumButtonAsButton | TLumButtonExternalLink | TLumButtonLink
