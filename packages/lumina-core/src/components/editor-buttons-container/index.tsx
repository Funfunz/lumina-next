/* eslint-disable no-unused-vars */
/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from '@/context/contextProvider'
import cx from 'classnames'
import type { TConfig } from '@/models/editor-buttonModel'
import { EditComponentButton } from '../action-buttons/edit'
import { AddComponentButton } from '../action-buttons/add'
import { DeleteComponentButton } from '../action-buttons/delete'
import { VisibleComponentButton } from '../action-buttons/visible'
import { MoveComponentButton } from '../action-buttons/move'
import { ExpandMenuButton } from '../action-buttons/menu'
import type { IComponentProps } from '@/models/data'

type TProps = {
  id: string
  onUpdate?: (data: any) => void
  componentProps?: IComponentProps
  config: TConfig
  inline?: boolean
  noUp?: boolean
  noDown?: boolean
  visible?: boolean
  hidden?: boolean
  menu?: boolean
  currentPosition?: number
}

export const EditorButtonsContainer = ({
  id,
  onUpdate,
  config,
  componentProps,
  currentPosition,
  inline,
  noUp,
  noDown,
  visible,
  hidden = false,
  menu,
}: TProps) => {
  const {
    state: {
      appContext: { isEditor },
    },
  } = useLuminaContext()

  if (!isEditor) return null
  return (
    <div className={cx('showEdit', inline ? 'showEditContainerInline' : 'showEditContainer')}>
      {config.editor.editable && !inline && (
        <EditComponentButton
          componentId={id}
          onUpdate={onUpdate}
          componentProps={componentProps}
          config={config}
        />
      )}

      {config?.editor.children && !inline && <AddComponentButton componentId={id} />}

      {config.editor.delete && !inline && <DeleteComponentButton componentId={id} />}

      {inline && !visible && <VisibleComponentButton id={id} hidden={hidden} />}

      {inline && (
        <MoveComponentButton
          active={noUp!}
          moveDirection='up'
          id={id}
          currentPosition={currentPosition || 0}
        />
      )}

      {inline && (
        <MoveComponentButton
          active={noDown!}
          moveDirection='down'
          id={id}
          currentPosition={currentPosition || 0}
        />
      )}

      {inline && !menu && (
        <ExpandMenuButton id={id} config={config} componentProps={componentProps} />
      )}
    </div>
  )
}
