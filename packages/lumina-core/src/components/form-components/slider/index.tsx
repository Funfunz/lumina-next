import React from 'react'
import { ControlLogicProps, Slider } from 'react-form-component'
export class LumSlider extends React.Component<ControlLogicProps> {
  render() {
    const className = this.props.className || 'lum__slider'
    const name = this.props.name

    return <Slider {...this.props} name={name} className={className} />
  }
}
