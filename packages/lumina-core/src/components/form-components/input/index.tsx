import { Input } from 'react-form-component'
import cx from 'classnames'
import type { ControlLogicProps } from 'react-form-component'

export type { ControlLogicProps }

export const LumInput = (props: ControlLogicProps) => {
  const defaultClass = 'lum__input'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <Input {...props} name={name} className={className} />
}
