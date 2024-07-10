type TLumButton = {
  classNames?: string
  text?: string
  iconLeft?: string
  iconRight?: string
  style?: 'primary' | 'secondary' | 'warning' | 'danger'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean;
  buttonType: 'button' | 'link' | 'externalLink'
}

type TLumButtonAsButton = TLumButton & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof TLumButton> & {
  buttonType: 'button'
  isMenuButton?: boolean
}

type TLumButtonExternalLink = TLumButton & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof TLumButton> & {
  buttonType: 'externalLink'
  target?: string
  href: string
}

type TLumButtonLink = TLumButton & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof TLumButton> & {
  buttonType: 'link'
  target?: string
  href: string
}

export type TLumButtonProps =
  | TLumButtonAsButton
  | TLumButtonLink
  | TLumButtonExternalLink