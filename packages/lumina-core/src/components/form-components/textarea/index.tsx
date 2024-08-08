import React from 'react'
import { ControlLogicProps, TextArea } from 'react-form-component'

export const LumTextArea: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__text-area'
  const className = `${defaultClass} ${props.className || ''}`
  const name = props.name

  return <TextArea {...props} name={name} className={className} />
}
