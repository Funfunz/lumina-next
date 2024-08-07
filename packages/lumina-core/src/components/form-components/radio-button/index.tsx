import React from 'react'
import { ControlLogicProps, options, Radio, setValue, value } from 'react-form-component'

interface IProps extends ControlLogicProps {
  className?: string
  name: string
  value?: value
  mandatory?: boolean
  small?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: value) => void
  setValue?: setValue
  options?: options
}

export class LumRadio extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__radio-button'
    const name = this.props.name

    return <Radio {...this.props} name={name} className={className} />
  }
}
