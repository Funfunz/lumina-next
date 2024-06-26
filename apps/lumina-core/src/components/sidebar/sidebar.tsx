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
}

const tabs: TSidebarTab[] = [
  {
    id: "lumPages",
    icon: "lumina-page"
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

  const handleActiveTab = (id: string) => {
    console.log("clicked id:", id)
    setActiveTab(id)
    if (!isBarOpen) handleToggler()
  }

  const closeSidebar = () => {
    handleToggler()
    setActiveTab("")
  } 

  console.log("active tab:", activeTab)

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
                    onClick={() => handleActiveTab(tab.id)}>
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
          <TreeView />
        </div>
      </div>
    </div>
  )
}
