import { useToggleModalContext } from '@/context/toggleModalContextProvider.js'
import { IComponentProps } from '@/models/data.js'
import { TSelectedOption } from '@/models/editor-buttonModel.js'
import { ADDCOMPONENT, AddComponentModal } from './addComponentModal/index.js'
import { ADDPAGE, AddPageModal } from './addPageModal/index.js'
import { DELETECOMPONENT, DeleteComponentModal } from './deleteComponentModal/index.js'
import { DELETEPAGE, DeletePageModal } from './deletePageModal/index.js'
import { EDITCOMPONENT, EditComponentModal } from './editComponentModal/index.js'
import { UPDATEPAGE, UpdatePageModal } from './updatePageModal/index.js'

export type TAddModalProps = {
  selectedOption: TSelectedOption | undefined
  cmpName: string
  formData: IComponentProps | undefined
}

export const EditorModal = () => {
  const {
    modalState: { modalType },
  } = useToggleModalContext<{ modalType: string }>()

  switch (modalType) {
    case ADDCOMPONENT:
      return <AddComponentModal />
    case EDITCOMPONENT:
      return <EditComponentModal />
    case DELETECOMPONENT:
      return <DeleteComponentModal />
    case ADDPAGE:
      return <AddPageModal />
    case UPDATEPAGE:
      return <UpdatePageModal />
    case DELETEPAGE:
      return <DeletePageModal />
    default:
      return null
  }
}
