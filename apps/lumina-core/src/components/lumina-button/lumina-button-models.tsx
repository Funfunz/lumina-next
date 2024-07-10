export type TLumButton = {
  to?: string
  classNames?: string
  text?: string
  iconLeft?: string
  iconRight?: string
  style?: 'primary' | 'secondary' | 'warning' | 'danger'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean;
  buttonType: 'button' | 'link' | 'externalLink' | 'menutButton'
  target?: string
  rel?: string
  href?: string
}
