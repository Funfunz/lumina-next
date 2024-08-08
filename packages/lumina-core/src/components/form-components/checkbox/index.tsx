import React from 'react'
import { Checkbox, ControlLogicProps } from 'react-form-component'

export const LumCheckbox: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__checkbox'
  const className = `${defaultClass} ${props.className || ''}`
  const name = props.name

  return <Checkbox {...props} name={name} className={className} />
}
