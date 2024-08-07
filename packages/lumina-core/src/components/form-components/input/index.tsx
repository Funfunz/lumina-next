import React from 'react'
import { Input, InputProps } from 'react-form-component'

interface IProps extends InputProps {
  className?: string
}

export class LumInput extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__input'
    const name = this.props.name

    return <Input {...this.props} name={name} className={className} />
  }
}
