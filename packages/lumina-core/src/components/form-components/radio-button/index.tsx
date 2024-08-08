import React from 'react'
import { ControlLogicProps, Radio } from 'react-form-component'

export const LumRadio: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__radio-button'
  const className = `${defaultClass} ${props.className || ''}`
  const name = props.name

  return <Radio {...props} name={name} className={className} />
}
