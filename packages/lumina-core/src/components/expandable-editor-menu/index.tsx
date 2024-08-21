/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import type { IComponentProps } from '@/models/data'
import type { TConfig } from '@/models/editor-buttonModel'
import { AddComponentButton } from '../action-buttons/add'
import { EditComponentButton } from '../action-buttons/edit'
import { Button } from '../button'
import { DeleteComponentButton } from '../action-buttons/delete'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

type TMenuProps = {
  id: string
  config: TConfig
  data: IComponentProps
  menuRef: React.RefObject<HTMLDivElement>
}

/**
 * Expandable editor menu for the treeview
 * @param id the component id to be edited
 * @param config the component's config for the lumina editor
 * @param data the editable data from the component
 * @returns
 */
export const ExpandableEditorMenu = ({ id, config, data, menuRef }: TMenuProps) => {
  return (
    <div className='expandable_editor_menu' ref={menuRef}>
      <AddComponentButton
        componentId={id}
        buttonLabel='Add Children'
        isDisabled={!config.editor.children}
        isMenuButton
      />
      <EditComponentButton
        buttonLabel='Edit'
        componentId={id}
        config={config}
        data={data}
        isDisabled={!config.editor.editable}
        isMenuButton
      />
      <Button
        buttonType='button'
        style='menuButton'
        text='Cut'
        iconLeft='lum-icon-cut'
        disabled={true}
      />
      <Button
        buttonType='button'
        style='menuButton'
        text='Copy'
        iconLeft='lum-icon-clone'
        disabled={true}
      />
      <Button
        buttonType='button'
        style='menuButton'
        text='Paste'
        iconLeft='lum-icon-paste'
        disabled={true}
      />
      <DeleteComponentButton
        buttonLabel='Delete'
        componentId={id}
        isDisabled={!config.editor.delete}
        isMenuButton
      />
    </div>
  )
}
