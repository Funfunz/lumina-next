import Select from "react-select"
import styles from "./dropdown-select.module.scss"
import cx from "classnames"
import { TSelectedOption } from "@/models/showEditModel"
import { LuminaFormLabel } from "../form-label/form-label"

type TProps = {
  id: string
  selectedOption: TSelectedOption
  placeholder: string
  onChange: (option: any) => void
  options: any[]
  label: string
  classnames?: string | string[] | React.CSSProperties
  helperText?: string
}

/**
 * Lumina Dropdown Selector to use in forms
 * @param id 
 * @param selectedOption 
 * @param placeholder 
 * @param onChange 
 * @param options array with the selector options
 * @param label 
 * @param classnames (optional)
 * @param helperText (optional)
 * @returns 
 */
export const LuminaDropdownSelect = ({ id, selectedOption, placeholder, onChange, options, label, classnames, helperText }: TProps) => {
  return (
    <div className={styles.luminaDropdownSelectContainer}>
      <LuminaFormLabel label={label} helperText={helperText} />
      <Select
        id={`${label}_${id}`}
        className={cx(classnames)}
        value={selectedOption}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        aria-label={label}
      />
    </div>
  )
}