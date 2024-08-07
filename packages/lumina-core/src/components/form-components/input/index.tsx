import React from 'react'
import { ControlLogicProps, Input } from 'react-form-component'

export class LumInput extends React.Component<ControlLogicProps> {
  render() {
    const className = this.props.className || 'lum__input'
    const name = this.props.name

    return <Input {...this.props} name={name} className={className} />
  }
}
