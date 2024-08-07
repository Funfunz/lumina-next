import React from 'react'
import { Checkbox } from 'react-form-component'

interface IProps {
  className?: string
  name: string
  [key: string]: any
}

export class LumCheckbox extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__checkbox'
    const name = this.props.name

    return <Checkbox {...this.props} name={name} className={className} />
  }
}
