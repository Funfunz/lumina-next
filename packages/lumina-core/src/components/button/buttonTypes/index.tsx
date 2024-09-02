/* eslint-disable no-unused-vars */
// Ideas taken from https://dev.to/frehner/polymorphic-button-component-in-typescript-c28

import { MutableRefObject } from 'react'

type TLumButtonBase = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
  variant: 'default'
  isFullWidth?: boolean
}

type TLumButtonLinkBase = TLumButtonBase & {
  target?: string
  href: string
}

export type TLumButtonExternalLink = TLumButtonLinkBase & {
  variant: 'externalLink'
}

export type TLumButtonLink = TLumButtonLinkBase & {
  variant: 'link'
}

export type TLumButton = TLumButtonAsButton | TLumButtonExternalLink | TLumButtonLink
