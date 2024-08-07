import React from 'react'
import { ControlLogicProps, setValue, Slider, value } from 'react-form-component'

interface IProps extends ControlLogicProps {
  className?: string
  name: string
  value?: value
  mandatory?: boolean
  setValue?: setValue
  min?: number
  max?: number
  step?: number
  unit?: string
}

export class LumSlider extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__slider'
    const name = this.props.name

    return <Slider {...this.props} name={name} className={className} />
  }
}
