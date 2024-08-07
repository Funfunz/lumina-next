import React from 'react'
import { ControlLogicProps, Radio } from 'react-form-component'

export class LumRadio extends React.Component<ControlLogicProps> {
  render() {
    const className = this.props.className || 'lum__radio-button'
    const name = this.props.name

    return <Radio {...this.props} name={name} className={className} />
  }
}
