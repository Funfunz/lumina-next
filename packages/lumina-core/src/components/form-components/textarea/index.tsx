import React from 'react'
import { ControlLogicProps, TextArea } from 'react-form-component'

export class LumTextArea extends React.Component<ControlLogicProps> {
  render() {
    const className = this.props.className || 'lum__text-area'
    const name = this.props.name

    return <TextArea {...this.props} name={name} className={className} />
  }
}
