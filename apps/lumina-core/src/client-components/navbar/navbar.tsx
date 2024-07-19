import { EditorButton } from '@/components/editor-button/editor-button';
import { config } from './config';
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

type TProps = {
  id: string
  icon: string
  brandName: string
  navItems: string[]
}

const items = ['shop', 'collective', 'designers', 'about us', 'contact']

export const Navbar = ({id, icon, brandName, navItems=items}:TProps) => {

  return(
    <>
    <nav className={styles.navBar}>
      <div className={styles.navleftContainer}>
        <a className={styles.navBrandContainer} href="#">
        <span className={styles.navBrandName}>{brandName}</span>
        <FontAwesomeIcon icon={faCoffee} />
        </a>
      </div>
      <div className={styles.navCenterContainer}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <EditorButton id={id} config={config} data={{icon, brandName, navItems:items }} />
    </nav>
    </>)
}
