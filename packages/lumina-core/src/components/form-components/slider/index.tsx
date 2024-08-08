import React from 'react'
import { ControlLogicProps, Slider } from 'react-form-component'

export const LumSlider: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__slider'
  const className = `${defaultClass} ${props.className || ''}`
  const name = props.name

  return <Slider {...props} name={name} className={className} />
}
