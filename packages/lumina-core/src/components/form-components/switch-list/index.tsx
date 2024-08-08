import React from 'react'
import { ControlLogicProps, SwitchList } from 'react-form-component'
import cx from 'classnames'

export const LumSwitchList: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__switch-list'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <SwitchList {...props} name={name} className={className} />
}
