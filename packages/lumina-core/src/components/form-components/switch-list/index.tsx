import React from 'react'
import { ControlLogicProps, SwitchList } from 'react-form-component'

export class LumSwitchList extends React.Component<ControlLogicProps> {
  render() {
    const className = this.props.className || 'lum__switch-list'
    const name = this.props.name

    return <SwitchList {...this.props} name={name} className={className} />
  }
}
