import React from 'react'
import { ControlLogicProps, options, setValue, SwitchList, value } from 'react-form-component'

interface IProps extends ControlLogicProps {
  className?: string
  name: string
  value?: value
  mandatory?: boolean
  setValue?: setValue
  options?: options
}

export class LumSwitchList extends React.Component<IProps> {
  render() {
    const className = this.props.className || 'lum__switch-list'
    const name = this.props.name

    return <SwitchList {...this.props} name={name} className={className} />
  }
}
