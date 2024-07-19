import { EditorButton } from '@/components/editor-button/editor-button';
import { config } from './config';
import styles from './navbar.module.css'

type TProps = {
  id: string

}

export const Navbar = ({id}:TProps) => {

  return(
  <>
  <nav>
  <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Cozy</label>
        <ul>
            <li><a className="active" href="#">HTML</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">ReactJS</a></li>
            <li><a href="#">NodeJS</a></li>
        </ul>
    <EditorButton id={id} config={config} data={{}} />
  </nav>
  </>)
}
