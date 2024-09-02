import type { IComponentProps } from '@/models/data'
import type { TConfig } from '@/models/editor-buttonModel'
import { AddComponentButton } from '../action-buttons/add'
import { EditComponentButton } from '../action-buttons/edit'
import { Button } from '../button'
import { DeleteComponentButton } from '../action-buttons/delete'

type TMenuProps = {
  id: string
  config: TConfig
  componentProps?: IComponentProps
  menuRef: React.RefObject<HTMLDivElement>
}

/**
 * Expandable editor menu for the treeview
 * @param id the component id to be edited
 * @param config the component's config for the lumina editor
 * @param data the editable data from the component
 * @returns
 */
export const ExpandableEditorMenu = ({ id, config, componentProps, menuRef }: TMenuProps) => {
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
        componentProps={componentProps}
        isDisabled={!config.editor.editable}
        isMenuButton
      />
      <Button
        variant='default'
        style='menuButton'
        text='Cut'
        iconLeft='lum-icon-cut'
        disabled={true}
      />
      <Button
        variant='default'
        style='menuButton'
        text='Copy'
        iconLeft='lum-icon-clone'
        disabled={true}
      />
      <Button
        variant='default'
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
