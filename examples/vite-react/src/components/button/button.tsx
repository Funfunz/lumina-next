<<<<<<< HEAD:apps/lumina-core/src/client-components/button/button.tsx
import { EditorButtonsContainer } from "@/components/editor-buttons-container/editor-buttons-container";
import styles from "./button.module.css";
=======
import { EditorButton } from '@lumina/core'
>>>>>>> master:examples/vite-react/src/components/button/button.tsx
import { config } from './config'
import cx from 'classnames';
import styles from './button.module.scss'

type TProps = {
  size?: "small" | "medium" | "large"
  style?: "outlined" | "rounded"
  text?: string
  id: string
}

export const Button = ({ id, size = "medium", style = "outlined", text = "button" }: TProps) => {
  const buttonStyles = cx(
    styles.button,
    style,
    size,
    styles.buttonContainer
  );

  return (
    <div>
      <button className={buttonStyles}>
        {text}
        <EditorButtonsContainer id={id} config={config} data={{ size, style, text }} />
      </button>
    </div>
  )
}
