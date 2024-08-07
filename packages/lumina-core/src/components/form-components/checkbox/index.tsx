import React from 'react'
import { Checkbox, ControlLogicProps, setValue, value } from 'react-form-component'

interface IProps extends ControlLogicProps {
  className?: string
  name: string
  value?: value
  text?: React.ReactNode
  mandatory?: boolean
  setValue?: setValue
  small?: boolean
}

export class LumCheckbox extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__checkbox'
    const name = this.props.name

    return <Checkbox {...this.props} name={name} className={className} />
  }
}
