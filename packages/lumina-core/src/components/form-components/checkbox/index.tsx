import React from 'react'
import { Checkbox, ControlLogicProps } from 'react-form-component'

export class LumCheckbox extends React.Component<ControlLogicProps> {
  render() {
    const className = this.props.className || 'lum__checkbox'
    const name = this.props.name

    return <Checkbox {...this.props} name={name} className={className} />
  }
}
