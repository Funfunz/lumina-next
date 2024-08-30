import cx from 'classnames'

interface IHelpTextProps {
  className?: string
  help?: string
}

export const HelpText = ({ className, help }: IHelpTextProps) => {
  return <p className={cx('help_text', className)}>{help}</p>
}
