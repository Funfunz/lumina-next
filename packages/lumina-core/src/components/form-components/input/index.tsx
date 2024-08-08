import React from 'react'
import { ControlLogicProps, Input } from 'react-form-component'
import cx from 'classnames'

export const LumInput: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__input'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <Input {...props} name={name} className={className} />
}
