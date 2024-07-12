import styles from "@/components/lumina-sidebar/lumina-sidebar.module.scss";
import cx from "classnames";
import { useState } from "react";
import { LuminaTreeViewTab } from "../lumina-tabs/treeView/lumina-treeView";
import { LuminaPagesTab } from "../lumina-tabs/pages/lumina-page";
import { LuminaButton } from "../lumina-button/lumina-button";

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
    icon: "lum-icon-page",
    panel: <LuminaPagesTab />
  },
  {
    id: "lumTabComponents",
    icon: "lum-icon-component",
    panel: <LuminaTreeViewTab />
  },
  {
    id: "lumTabLibrary",
    icon: "lum-icon-library"
  }
]

const helperTabs: TSidebarTab[] = [
  {
    id: "lumTabConfig",
    icon: "lum-icon-settings"
  },
  {
    id: "lumTabHelp",
    icon: "lum-icon-help-fill"
  },
  {
    id: "lumTabUser",
    icon: "lum-icon-user"
  },
]

export const LuminaSidebarEditor = ({ isBarOpen, handleToggler }: TSidebarEditor) => {
  const [activeTab, setActiveTab] = useState<string>("")
  const [activePanel, setActivePanel] = useState<JSX.Element>()

  const handleActiveTab = ({ id, panel }: TSidebarTab) => {
    setActiveTab(id)
    setActivePanel(panel)
    if (!isBarOpen) handleToggler()
  }

  const closeSidebar = () => {
    handleToggler()
    setActiveTab("")
  }

  const createTabHelper = (tabs: TSidebarTab[]) => {
    const tabsElem: JSX.Element[] = []
    tabs.map(tab => {
      const isActive = tab.id === activeTab
      tabsElem.push(
        <li key={tab.id} id={tab.id}>
            <LuminaButton buttonType="button"
            iconLeft={tab.icon}
            onClick={() => handleActiveTab(tab)}
            className={cx(styles.sidebarTab, { [styles.activeTab]: isActive })} />
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
        <div className={cx(styles.sidebarToogler, { "lum-display-none": !isBarOpen })}
          onClick={() => closeSidebar()}>
          <a className="lum-icon-chevron-left"></a>
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
        <div className={cx(styles.sidebarPanel, { "lum-display-none": !isBarOpen })}>
          {activePanel}
        </div>
      </div>
    </div>
  )
}
