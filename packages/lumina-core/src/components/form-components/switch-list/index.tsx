import React from 'react'
import { ControlLogicProps, SwitchList } from 'react-form-component'

export const LumSwitchList: React.FC<ControlLogicProps> = props => {
  const defaultClass = 'lum__switch-list'
  const className = `${defaultClass} ${props.className || ''}`
  const name = props.name

  return <SwitchList {...props} name={name} className={className} />
}
