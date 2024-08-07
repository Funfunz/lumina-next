import React from 'react'
import { Radio } from 'react-form-component'

interface IProps {
  className?: string
  name: string
  [key: string]: any
}

export class LumRadio extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__radio-button'
    const name = this.props.name

    return <Radio {...this.props} name={name} className={className} />
  }
}
