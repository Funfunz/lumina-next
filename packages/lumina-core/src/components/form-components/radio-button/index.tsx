import React from 'react'
import { ControlLogicProps, Radio } from 'react-form-component'
import cx from 'classnames'

export const LumRadio: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__radio-button'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <Radio {...props} name={name} className={className} />
}
