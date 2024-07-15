import styles from "./form-label.module.scss"

type TProps = {
  label: string
  helperText?: string
}

export const LuminaFormLabel = ({ label, helperText }: TProps) => {
  return (
    <>
      <label className={styles.selectorLabel} htmlFor={label}>{label}</label>
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </>
  )
}