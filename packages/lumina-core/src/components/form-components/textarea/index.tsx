import React from 'react'
import { TextArea } from 'react-form-component'

interface IProps {
  className?: string
  name: string
  [key: string]: any
}

export class LumTextArea extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__text-area'
    const name = this.props.name

    return <TextArea {...this.props} name={name} className={className} />
  }
}
