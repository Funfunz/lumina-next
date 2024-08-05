import { TConfigItem } from '@/models/editor-buttonModel';
import { Input, InputProps } from 'react-form-component'

interface IProps extends InputProps {
  config: TConfigItem
}

/**
 * @param name Unique ID for the Form
 * @param label Field Label "title" of the label
 * @param type Allows you to pick one of the following types: text, email, password, url, tel, number, search, file, date, datetime-local, month, week, time, postcode and password-novalidation
 * @param placeholder The usual placeholder on an input form
 * @param prefix Decoration for left side of the field (symbol, unit, etc)
 * @param suffix Decoration for right side of the field (symbol, unit, etc)
 * @param min Minimal amount of imput characters (number)
 * @param narrow Decreases input width (boolean)
 * @param large Increases input height (boolean)
 * @param initialValue Default value of a field 
 * @param activeEnterPress Allows submit on enter (declared on a parent Form) via onEnterPress Prop (boolean)
 * @param help Text displayed under the input (helper text)
 * @param noBottomGutter Disables the bottom margin (boolean)
 * @param inlineLabel Move label from top to left (boolean)
 * @param disabled Turns off the interaction with component
 * @param className Gives input control wrapper as a class (string)
 * @returns 
 */
export const LumInput = (props: IProps) => {
  const { name, label, type, placeholder, prefix, suffix, min, narrow, large, 
    initialValue, activeEnterPress, help, noBottomGutter, inlineLabel, disabled, className } = props

  return (
  <Input 
  name={name}
  label={label}
  type={type}
  placeholder={placeholder}
  prefix={prefix}
  suffix={suffix}
  min={min}
  narrow={narrow}
  large={large}
  initialValue={initialValue}
  activeEnterPress={activeEnterPress}
  help={help}
  npBottomGutter={noBottomGutter}
  inLineLabel={inlineLabel}
  disabled={disabled}
  className={className}
  />
  )
}