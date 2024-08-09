/* eslint-disable no-unused-vars */
/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from '@/context/contextProvider'
import cx from 'classnames'
import { TConfig } from '@/models/editor-buttonModel'
import { EditComponentButton } from '../action-buttons/edit'
import { AddComponentButton } from '../action-buttons/add'
import { DeleteComponentButton } from '../action-buttons/delete'
import { VisibleComponentButton } from '../action-buttons/visible'
import { MoveComponentButton } from '../action-buttons/move'
import { ExpandMenuButton } from '../action-buttons/menu'
import { IComponentProps } from '@/models/data'

type TProps = {
  id: string
  onUpdate?: (data: any) => void
  data: IComponentProps
  config: TConfig
  inline?: boolean
  noUp?: boolean
  noDown?: boolean
  visible?: boolean
  hidden?: boolean
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
  hidden,
  menu,
}: TProps) => {
  const {
    state: {
      appContext: { editor },
    },
  } = useLuminaContext()

  if (!editor) return null
  return (
    <div className={cx('showEdit', inline ? 'showEditContainerInline' : 'showEditContainer')}>
      {config.editor.editable && !inline && (
        <EditComponentButton componentId={id} onUpdate={onUpdate} data={data} config={config} />
      )}

      {config?.editor.children && !inline && <AddComponentButton componentId={id} />}

      {config.editor.delete && !inline && <DeleteComponentButton componentId={id} />}

      {inline && !visible && <VisibleComponentButton id={id} hidden={hidden || false} />}

      {inline && <MoveComponentButton active={noUp!} moveDirection='up' id={id} />}

      {inline && <MoveComponentButton active={noDown!} moveDirection='down' id={id} />}

      {inline && !menu && <ExpandMenuButton id={id} config={config} data={data} />}
    </div>
  )
}
