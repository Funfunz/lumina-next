import { Checkbox, CheckboxList, type ControlLogicProps } from 'react-form-component'
import cx from 'classnames'

export type { ControlLogicProps }

export const LumCheckbox = (props: ControlLogicProps) => {
  const defaultClass = 'lum__checkbox'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <Checkbox {...props} name={name} className={className} />
}

export const LumCheckboxList = (props: ControlLogicProps) => {
  const defaultClass = 'lum__checkbox'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <CheckboxList {...props} name={name} className={className} />
}
