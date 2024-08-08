import React from 'react'
import { Checkbox, ControlLogicProps } from 'react-form-component'
import cx from 'classnames'

export const LumCheckbox: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__checkbox'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <Checkbox {...props} name={name} className={className} />
}
