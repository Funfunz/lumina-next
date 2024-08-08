import React from 'react'
import { ControlLogicProps, TextArea } from 'react-form-component'
import cx from 'classnames'

export const LumTextArea: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__text-area'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <TextArea {...props} name={name} className={className} />
}
