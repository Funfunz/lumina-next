import React from 'react'
import { ControlLogicProps, setValue, TextArea, value } from 'react-form-component'

interface IProps extends ControlLogicProps {
  className?: string
  name: string
  value?: value
  placeholder?: string
  mandatory?: boolean
  setValue?: setValue
  rows?: number
  min?: number
}

export class LumTextArea extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__text-area'
    const name = this.props.name

    return <TextArea {...this.props} name={name} className={className} />
  }
}
