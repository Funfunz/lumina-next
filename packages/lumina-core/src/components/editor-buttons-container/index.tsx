/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from '@/context/contextProvider.js'
import cx from 'classnames'
import type { TConfig } from '@/models/editor-buttonModel.js'
import { EditComponentButton } from '../action-buttons/components/edit/index.js'
import { AddComponentButton } from '../action-buttons/components/add/index.js'
import { DeleteComponentButton } from '../action-buttons/components/delete/index.js'
import { VisibleComponentButton } from '../action-buttons/components/visible/index.js'
import { MoveComponentButton } from '../action-buttons/components/move/index.js'
import { ExpandMenuButton } from '../action-buttons/components/menu/index.js'
import type { IComponentProps } from '@/models/data.js'

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
