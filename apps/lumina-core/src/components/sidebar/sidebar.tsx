import styles from "@/components/sidebar/sidebar.module.scss";
import cx from "classnames";

import { useState } from "react";
import { TreeViewTab } from "../tabs/treeView/treeView";
import { PagesTab } from "../tabs/pages/page";

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
const editorTabs: TSidebarTab[] = [
  {
    id: "lumTabPages",
    icon: "lumina-page",
    panel: <PagesTab/>
  },
  {
    id: "lumTabComponents",
    icon: "lumina-component",
    panel: <TreeViewTab/>
  },
  {
    id: "lumTabLibrary",
    icon: "lumina-library"
  }
]

const helperTabs: TSidebarTab[] = [
  {
    id: "lumTabConfig",
    icon: "lumina-settings"
  },
  {
    id: "lumTabHelp",
    icon: "lumina-help"
  },
  {
    id: "lumTabUser",
    icon: "lumina-user"
  },
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

  const createTabHelper = (tabs : TSidebarTab[]) => {
    const tabsElem: JSX.Element[] = []
    tabs.map(tab => {
      const isActive = tab.id === activeTab
      tabsElem.push(
        <li key={tab.id} id={tab.id}
            className={cx(styles.sidebarTab, {[styles.activeTab]: isActive})}
            onClick={() => handleActiveTab(tab)}>
          <a className={tab.icon}></a>
        </li>
      )
    })
    return tabsElem
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
            {createTabHelper(editorTabs)}
          </ul>
          <ul className={styles.sidebarTabsList}>
            {createTabHelper(helperTabs)}
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
