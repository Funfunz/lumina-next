import { Switch, SwitchList, type ControlLogicProps } from 'react-form-component'
import cx from 'classnames'

export type { ControlLogicProps }

export const LumSwitchList = (props: ControlLogicProps) => {
  const defaultClass = 'lum__switch-list'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <SwitchList {...props} name={name} className={className} />
}

export const LumSwitch = (props: ControlLogicProps) => {
  const defaultClass = 'lum__switch-list'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <Switch {...props} name={name} className={className} />
}
