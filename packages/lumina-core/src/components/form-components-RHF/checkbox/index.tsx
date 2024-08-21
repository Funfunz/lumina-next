import cx from 'classnames'

type TCheckbox = {
  id?: string
  className?: string
  text?: string
}

export const CheckBox = ({ id, className, text }: TCheckbox) => {
  const defaultClass = 'lum__checkbox'
  const classNames = cx(defaultClass, className)

  return (
    <>
      <input type='checkbox' id={id} className={classNames} /> {text}
    </>
  )
}
