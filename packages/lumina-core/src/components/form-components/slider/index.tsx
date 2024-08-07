import React from 'react'
import { Slider } from 'react-form-component'

interface IProps {
  className?: string
  name: string
  [key: string]: any
}

export class LumSlider extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__slider'
    const name = this.props.name

    return <Slider {...this.props} name={name} className={className} />
  }
}
