import { EditorButton } from '@/components/editor-button/editor-button';
import { config } from './config';
import styles from './navbar.module.css'

type TProps = {
  id: string

}

export const Navbar = ({id}:TProps) => {

  return(
  <>
  <div>
    <EditorButton id={id} config={config} data={{}} />
  </div>
  </>)
}
