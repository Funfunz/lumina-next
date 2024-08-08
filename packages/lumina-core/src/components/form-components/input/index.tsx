import React from 'react'
import { ControlLogicProps, Input } from 'react-form-component'

export const LumInput: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__input'
  const className = `${defaultClass} ${props.className || ''}`
  const name = props.name

  return <Input {...props} name={name} className={className} />
}
