import { useToggleModalContext } from '../../context/toggleModalContextProvider'
import { IComponentProps } from '../../models/data'
import { TSelectedOption } from '../../models/editor-buttonModel'
import { ADDCOMPONENT, AddComponentModal } from './addComponentModal'
import { ADDPAGE, AddPageModal } from './addPageModal'
import { DELETECOMPONENT, DeleteComponentModal } from './deleteComponentModal'
import { DELETEPAGE, DeletePageModal } from './deletePageModal'
import { EDITCOMPONENT, EditComponentModal } from './editComponentModal'
import { UPDATEPAGE, UpdatePageModal } from './updatePageModal'
import './styles.scss'

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
