import { ChangeEvent } from "react"
import styles from "./text-input.module.scss"
import cx from "classnames"
import { LuminaFormLabel } from "../form-label/form-label"

type TProps = {
  label: string
  id: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  classnames?: string | string[] | React.CSSProperties
  helperText?: string
}

/**
 * Lumina Text input
 * @param id
 * @param label
 * @param value
 * @param onChange
 * @param classnames (optional)
 * @param helperText (optional)
 * @returns 
 */
export const LuminaTextInput = ({ label, id, value, onChange, classnames, helperText }: TProps) => {
  return (
    <div className={styles.textInputContainer}>
      <LuminaFormLabel label={label} />
      <input id={`${label}_${id}`}
        className={cx(styles.textInput, classnames)}
        type="text"
        value={value}
        onChange={onChange} />
    </div>
  )
}