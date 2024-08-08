import React from 'react'
import { ControlLogicProps, Slider } from 'react-form-component'
import cx from 'classnames'

export const LumSlider: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__slider'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <Slider {...props} name={name} className={className} />
}
