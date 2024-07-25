import styles from "./title.module.scss"
import cx from "classnames"

type TProps = {
  content?: string
  hLevel?: 1 | 2 | 3 | 4 | 5 | 6
  fontSize?: string
  weight?: number | string
  lineHeight?: string
  color?: string
  classnames?: string
}

/**
 * All around Title component to be used throughout the entire Lumina editor
 * @param content string title
 * @param hLevel heading element size - default: 3
 * @param fontSize string with size for the title (ex: 16px, 2rem, etc) - default: 2rem
 * @param weight string or number with the weight (ex: 400, bold) - default: 2.5rem
 * @param lineHeight string with the line-height (ex: 2.5rem, 20px, etc) - default: 400
 * @param color color # or stirng (ex: black, #CCC) - default: var(lum-text-color)(#00000)
 * @param classnames any classname related with the title
 * @returns
 */
export const Title = (
  { content,
    hLevel = 3,
    fontSize = "2rem",
    lineHeight = "2.5rem",
    weight = 400,
    color = "",
    classnames
  }: TProps) => {

  const HeadingTag = `h${hLevel}` as keyof JSX.IntrinsicElements;

  const inlineStyles: React.CSSProperties = {
    fontSize: fontSize,
    fontWeight: weight,
    lineHeight: lineHeight,
    color: color
  }

  return (
    <HeadingTag style={classnames ? {} : inlineStyles} className={cx(styles.luminaTitle, classnames)}>
      {content}
    </HeadingTag>
  )
}
