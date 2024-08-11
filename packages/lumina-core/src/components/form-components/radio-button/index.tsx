import { Radio, type ControlLogicProps } from 'react-form-component'
import cx from 'classnames'

export type { ControlLogicProps }

export const LumRadio = (props: ControlLogicProps) => {
  const defaultClass = 'lum__radio-button'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <Radio {...props} name={name} className={className} />
}
