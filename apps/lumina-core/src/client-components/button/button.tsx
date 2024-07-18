import { EditorButton } from '../../components/editor-button/editor-button';
import styles from "./button.module.css";
import { config } from './config'
import cx from 'classnames';

type TProps = {
  size?: "small" | "medium" | "large"
  style?: "outlined" | "rounded"
  text?: string
  id: string
}

export const Button = ({id, size="medium", style="outlined", text="button"}:TProps) => {
  return(
    <div>
      <button className={cx(styles.style, styles.size)}>
        {text}
      </button>
      <EditorButton id={id} config={config} data={{size, style, text}}/>
    </div>
  )

}
