import React from 'react'
import { Input } from 'react-form-component'

interface IProps {
  className?: string
  name: string
  [key: string]: any
}

export class LumInput extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__input'
    const name = this.props.name

    return <Input {...this.props} name={name} className={className} />
  }
}
