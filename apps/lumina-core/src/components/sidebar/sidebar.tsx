import styles from "@/components/sidebar/sidebar.module.scss";
import cx from "classnames";
import { TreeView } from "../treeView/treeView";
import { useCallback, useState } from "react";

type TSidebarEditor = {
  handleToggler: Function
  isBarOpen: boolean
}

type TSidebarTab = {
  id: string
  icon: string
  panel?: JSX.Element
}

// WIP
const tabs: TSidebarTab[] = [
  {
    id: "lumPages",
    icon: "lumina-page",
    panel: <TreeView/>
  },
  {
    id: "lumComponents",
    icon: "lumina-component"
  },
  {
    id: "lumLibrary",
    icon: "lumina-library"
  }
]

export const SidebarEditor = ({isBarOpen, handleToggler} : TSidebarEditor) => {
  const [activeTab, setActiveTab] = useState<string>("")
  const [activePanel, setActivePanel] = useState<JSX.Element>()

  const handleActiveTab = ({id, panel}: TSidebarTab) => {
    setActiveTab(id)
    setActivePanel(panel)
    if (!isBarOpen) handleToggler()
  }

  const closeSidebar = () => {
    handleToggler()
    setActiveTab("")
  } 

  return (
    // container
    <div className={styles.sidebarContainer}>
      <div className={cx(styles.sidebarHeader, { [String(styles.open)]: isBarOpen, })}>
        <div className={styles.sidebarHeaderIcon}>
          <div className={styles.sidebarLuminaIcon}></div>
        </div>
        {/* expand icon */}
        <div className={cx(styles.sidebarToogler, { "lum-display-none" : !isBarOpen })}
          onClick={() => closeSidebar()}>
          <a className={isBarOpen ? "lumina-close" : "lumina-open"}></a>
        </div>
      </div>
      <div className={styles.sidebarBody}>
        {/* tabs */}
        <div className={styles.sidebarTabsContainer}>
          <ul className={styles.sidebarTabsList}>
            {tabs.map(tab => {
              const isActive = tab.id === activeTab
              return (
                <li key={tab.id} id={tab.id} 
                    className={cx(styles.sidebarTab, {[styles.activeTab]: isActive})} 
                    onClick={() => handleActiveTab(tab)}>
                  <a className={tab.icon}></a>
                </li>
              )
            })}
          </ul>
          <ul className={styles.sidebarTabsList}>
            <li className={cx("lumina-user", styles.sidebarTab)}></li>
          </ul>
        </div>
        {/* tab panel */}
        <div className={cx(styles.sidebarPanel, { "lum-display-none" : !isBarOpen })}>
          {/* insert mirrado's components here */}
          {activePanel}
        </div>
      </div>
    </div>
  )
}
