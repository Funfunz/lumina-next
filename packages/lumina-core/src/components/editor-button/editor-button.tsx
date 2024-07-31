/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from "@/context/contextProvider"
import cx from "classnames"
import { TConfig } from "@/models/editor-buttonModel"
import { EditComponentButton } from "../action-buttons/edit/edit-component"
import { AddComponentButton } from "../action-buttons/add/add-component"
import { DeleteComponentButton } from "../action-buttons/delete/delete-component"
import { VisibleComponentButton } from "../action-buttons/visible/visible-component"
import { MoveComponentButton } from "../action-buttons/move/move-component"
import { MenuComponentButton } from "../action-buttons/menu/menu-component"
import { IComponentProps } from "@/models/data"

type TProps = {
  id: string
  onUpdate?: (data: any) => void
  data: IComponentProps
  config: TConfig
  inline?: boolean
  noUp?: boolean
  noDown?: boolean
  visible?: boolean
  menu?: boolean
}

export const EditorButtonsContainer = ({
  id,
  onUpdate,
  config,
  data,
  inline,
  noUp,
  noDown,
  visible,
  menu,
}: TProps) => {
  const {
    state: {
      appContext: { editor },
    }
  } = useLuminaContext()

  if (!editor) return null
  return (
    <div
      className={cx('showEdit', inline ? 'showEditContainerInline' : 'showEditContainer')}
    >
      {config.editor.editable && !inline &&
        <EditComponentButton
          componentId={id}
          onUpdate={onUpdate}
          data={data}
          config={config}
        />
      }

      {config?.editor.children && !inline &&
        <AddComponentButton componentId={id} />}

      {config.editor.delete && !inline &&
        <DeleteComponentButton componentId={id} />}

      {inline && !visible &&
        <VisibleComponentButton />}

      {inline && !noUp &&
        <MoveComponentButton moveDirection="up" id={id} />}

      {inline && !noDown &&
        <MoveComponentButton moveDirection="down" id={id} />}

      {inline && !menu &&
        <MenuComponentButton id={id} config={config} data={data} />}
    </div >
  )
}


