/* eslint-disable @typescript-eslint/ban-types */
import cx from "classnames";
import { useState } from "react";
import { Button } from "../button";
import { PagesTab } from "../tabs/pages";
import { TreeViewTab } from "../tabs/treeView";

type TSidebarEditor = {
  handleToggler: Function
  isBarOpen: boolean
}

type TSidebarTab = {
  id: string
  icon: string
  panel?: JSX.Element
}

const editorTabs: TSidebarTab[] = [
  {
    id: "lumTabPages",
    icon: "lum-icon-page",
    panel: <PagesTab />
  },
  {
    id: "lumTabComponents",
    icon: "lum-icon-component",
    panel: <TreeViewTab />
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

export const SidebarEditor = ({ isBarOpen, handleToggler }: TSidebarEditor) => {
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
          <Button buttonType="button"
            iconLeft={tab.icon}
            onClick={() => handleActiveTab(tab)}
            className={cx('sidebarTab', { activeTab: isActive })} />
        </li>
      )
    })
    return tabsElem
  }

  return (
    // container
    <div className='sidebarContainer'>
      <div className={cx('sidebarHeader', { open: isBarOpen, })}>
        <div className='sidebarHeaderIcon'>
          <div className='sidebarLuminaIcon'></div>
        </div>
        {/* expand icon */}
        <div className={cx('sidebarToogler', { "lum-display-none": !isBarOpen })}
          onClick={() => closeSidebar()}>
          <a className="lum-icon-chevron-left"></a>
        </div>
      </div>
      <div className={'sidebarBody'}>
        {/* tabs */}
        <div className='sidebarTabsContainer'>
          <ul className='sidebarTabsList'>
            {createTabHelper(editorTabs)}
          </ul>
          <ul className='sidebarTabsList'>
            {createTabHelper(helperTabs)}
          </ul>
        </div>
        {/* tab panel */}
        <div className={cx('sidebarPanel', { "lum-display-none": !isBarOpen })}>
          {activePanel}
        </div>
      </div>
    </div>
  )
}
