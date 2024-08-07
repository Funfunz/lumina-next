/* eslint-disable @typescript-eslint/ban-types */
import cx from 'classnames'
import { useState } from 'react'
import { Button } from '../button'
import { PagesTab } from '../tabs/pages'
import { TreeViewTab } from '../tabs/treeView'
import Form, { Input, Radio, Slider, SwitchList, TextArea } from 'react-form-component'
import { LumCheckbox } from '../form-components/checkbox'

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
    id: 'lumTabPages',
    icon: 'lum-icon-page',
    panel: <PagesTab />,
  },
  {
    id: 'lumTabComponents',
    icon: 'lum-icon-component',
    panel: <TreeViewTab />,
  },
  {
    id: 'lumTabLibrary',
    icon: 'lum-icon-library',
    panel: (
      <>
        <Form fields={['test0']}>
          <LumCheckbox
            name="test0"
            mandatory
            label="Field Label"
            text="Checkbox Test"
            help="This is the optional help text for this field"
          />
        </Form>
        <br />
        <hr />
        <br />
        <Form fields={['test1']}>
          <Slider
            className="lum__slider"
            name="test1"
            mandatory
            label="Field Label"
            type="text"
            help="This is the optional help text for this field"
          />
        </Form>
        <br />
        <hr />
        <br />
        <Form fields={['test2']}>
          <TextArea
            className="lum__text-area"
            name="test2"
            mandatory
            label="Field Label"
            type="text"
            help="This is the optional help text for this field"
            placeholder="Type something"
          />
        </Form>
        <br />
        <hr />
        <br />
        <Form fields={['test3']}>
          <Radio
            className="lum__radio-button"
            name="test3"
            mandatory
            label="Field Label"
            type="text"
            help="This is the optional help text for this field"
            options={['Radio Test 1', 'Radio Test 2']}
          />
          <br />
          <hr />
          <br />
        </Form>
        <Form fields={['test4']}>
          <Input
            className="lum__input"
            name="test4"
            mandatory
            placeholder="Type something"
            label="Field Label"
            type="text"
            help="This is the optional help text for this field"
          />
        </Form>
        <br />
        <hr />
        <br />
        <Form fields={['test5']}>
          <SwitchList
            className="lum__switch-list"
            name="test5"
            mandatory
            label="Field Label"
            type="text"
            help="This is the optional help text for this field"
            options={['Switch-List test']}
          />
        </Form>
        <br />
        <hr />
        <br />
        <Form fields={['test5']}>
          <Input
            className="lum__input"
            name="test5"
            mandatory
            placeholder="pick a password"
            label="Validation Test"
            type="password"
            help="To validate, enter a password with a minimum 8 characters."
            min={8}
          />
        </Form>
      </>
    ),
  },
]

const helperTabs: TSidebarTab[] = [
  {
    id: 'lumTabConfig',
    icon: 'lum-icon-settings',
  },
  {
    id: 'lumTabHelp',
    icon: 'lum-icon-help-fill',
  },
  {
    id: 'lumTabUser',
    icon: 'lum-icon-user',
  },
]

export const SidebarEditor = ({ isBarOpen, handleToggler }: TSidebarEditor) => {
  const [activeTab, setActiveTab] = useState<string>('')
  const [activePanel, setActivePanel] = useState<JSX.Element>()

  const handleActiveTab = ({ id, panel }: TSidebarTab) => {
    setActiveTab(id)
    setActivePanel(panel)
    if (!isBarOpen) handleToggler()
  }

  const closeSidebar = () => {
    handleToggler()
    setActiveTab('')
  }

  const createTabHelper = (tabs: TSidebarTab[]) => {
    const tabsElem: JSX.Element[] = []
    tabs.map(tab => {
      const isActive = tab.id === activeTab
      tabsElem.push(
        <li key={tab.id} id={tab.id}>
          <Button
            buttonType="button"
            iconLeft={tab.icon}
            onClick={() => handleActiveTab(tab)}
            className={cx('sidebarTab', { activeTab: isActive })}
          />
        </li>
      )
    })
    return tabsElem
  }

  return (
    // container
    <div className="sidebarSection">
      <div className={cx('sidebarHeader', { open: isBarOpen })}>
        <div className="sidebarHeaderIcon">
          <div className="sidebarLuminaIcon"></div>
        </div>
        {/* expand icon */}
        <div
          className={cx('sidebarToogler', { 'lum-display-none': !isBarOpen })}
          onClick={() => closeSidebar()}
        >
          <a className="lum-icon-chevron-left"></a>
        </div>
      </div>
      <div className={'sidebarBody'}>
        {/* tabs */}
        <div className="sidebarTabsContainer">
          <ul className="sidebarTabsList">{createTabHelper(editorTabs)}</ul>
          <ul className="sidebarTabsList">{createTabHelper(helperTabs)}</ul>
        </div>
        {/* tab panel */}
        <div className={cx('sidebarPanel', { 'lum-display-none': !isBarOpen })}>{activePanel}</div>
      </div>
    </div>
  )
}
