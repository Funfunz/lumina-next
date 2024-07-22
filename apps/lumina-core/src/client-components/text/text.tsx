import { config } from './config'
import styles from './text.module.css'
import { EditorButtonsContainer } from '@/components/editor-buttons-container/editor-buttons-container'

interface IProps {
  id: string
  text: string
}

const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const Text = ({ id, text = sampleText }: IProps) => {
  return (
    <div className={styles.text}>
      <p>{text}</p>
      <EditorButtonsContainer id={id} config={config} data={{ text }} />
    </div>
  )
}
