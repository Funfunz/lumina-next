import React from 'react'
import { SwitchList } from 'react-form-component'

interface IProps {
  className?: string
  name: string
  [key: string]: any
}

export class LumSwitchList extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__switch-list'
    const name = this.props.name

    return <SwitchList {...this.props} name={name} className={className} />
  }
}
