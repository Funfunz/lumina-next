// Ideas taken from https://dev.to/frehner/polymorphic-button-component-in-typescript-c28

type TLumButtonBase = {
  className?: string
  text?: string
  iconLeft?: string
  iconRight?: string
  style?: 'primary' | 'secondary' | 'warning' | 'danger' | 'filter' | 'live'| 'menuButton'
  size?: 'small' | 'large'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean;
}

type TLumButtonAsButton = TLumButtonBase & {
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

export type TLumButton = TLumButtonAsButton | TLumButtonExternalLink | TLumButtonLink;
