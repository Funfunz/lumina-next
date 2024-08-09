import { Slider, type ControlLogicProps } from 'react-form-component'
import cx from 'classnames'

export type { ControlLogicProps }

export const LumSlider = (props: ControlLogicProps) => {
  const defaultClass = 'lum__slider'
  const className = cx(defaultClass, props.className)
  const name = props.name

  return <Slider {...props} name={name} className={className} />
}
