import { TextArea, type ControlLogicProps } from 'react-form-component'
import cx from 'classnames'

export type { ControlLogicProps }

export const LumTextArea = (props: ControlLogicProps) => {
  const defaultClass = 'lum__text-area'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <TextArea {...props} name={name} className={className} />
}
