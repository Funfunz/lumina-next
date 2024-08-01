import { IComponentProps } from "@/models/data"
import { TConfig } from "@/models/editor-buttonModel"
import { AddComponentButton } from "../action-buttons/add"
import { EditComponentButton } from "../action-buttons/edit"
import { Button } from "../button"
import { DeleteComponentButton } from "../action-buttons/delete"

type TMenuProps = {
  id: string
  config: TConfig
  data: IComponentProps
}

/**
 * Expandable editor menu for the treeview
 * @param id the component id to be edited
 * @param config the compoennt's config for the lumina editor
 * @param data the editable data from the component
 * @returns 
 */
export const ExpandableEditorMenu = ({ id, config, data }: TMenuProps) => {
  return (
    <div className='expandable_editor_menu'>
      <AddComponentButton
        componentId={id}
        buttonLabel="Add Children"
        isDisabled={!config.editor.children}
        isMenuButton
      />
      <EditComponentButton
        buttonLabel="Edit"
        componentId={id}
        config={config}
        data={data}
        isDisabled={!config.editor.editable}
        isMenuButton
      />
      <Button
        buttonType="button"
        style="menuButton"
        text="Cut"
        iconLeft="lum-icon-cut"
      />
      <Button
        buttonType="button"
        style="menuButton"
        text="Copy"
        iconLeft="lum-icon-clone"
      />
      <Button
        buttonType="button"
        style="menuButton"
        text="Paste"
        iconLeft="lum-icon-paste"
      />
      <DeleteComponentButton
        buttonLabel="Delete"
        componentId={id}
        isDisabled={!config.editor.delete}
        isMenuButton
      />
    </div>
  );
}
