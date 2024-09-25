import { IData, IDataPage } from '@/models/data'
import { ICreatePageAction, IDeletePageAction, IUpdatePageAction } from './actions/pageActions'
import {
  ICreateComponentAction,
  IDeleteComponentAction,
  IMoveDownComponentAction,
  IMoveUpComponentAction,
  IUpdateComponentAction,
  IVisibleComponentAction,
} from './actions/componentActions'
import { moveUpElement, moveDownElement, newComponentFactory } from './helpers'
import { ISetBuilderDataAction, ISetSelectedPageAction } from './actions/builderActions'

export interface IBuilderDataContext {
  builderData: IData
  selectedPage: string
  pages: string[]
}

export type TBuilderDataContextActions =
  | ISetBuilderDataAction
  | ICreatePageAction
  | IUpdatePageAction
  | IDeletePageAction
  | ICreateComponentAction
  | IUpdateComponentAction
  | IDeleteComponentAction
  | IMoveUpComponentAction
  | IMoveDownComponentAction
  | IVisibleComponentAction
  | ISetSelectedPageAction

export const initialBuilderDataContextState: IBuilderDataContext = {
  builderData: {
    pages: {},
    components: {},
  },
  selectedPage: '',
  pages: [],
}

export const builderDataContextReducer = (
  data: IBuilderDataContext,
  action: TBuilderDataContextActions
): IBuilderDataContext => {
  switch (action.type) {
    case 'setBuilderData':
      return JSON.parse(JSON.stringify(action.data))

    case 'createPage':
      const route =
        action.data.urlParams.length > 0
          ? action.data.urlParams.reduce((prev, current) => {
              return `${prev}/${current}`
            }, '')
          : '/'
      const newPage: IDataPage = {
        id: action.data.id,
        friendlyName: action.data.friendlyName,
        description: action.data.description,
        route,
        dateModified: Date.now().toString(),
        status: 'draft',
        children: [],
      }
      return {
        ...data,
        builderData: {
          ...data.builderData,
          pages: {
            ...data.builderData.pages,
            [action.data.id]: newPage,
          },
        },
        pages: [...data.pages, action.data.id],
      }

    case 'updatePage':
      const pageToUpdate = data.builderData.pages[action.data.id]

      if (!pageToUpdate) {
        return data
      }

      const newRoute = action.data.urlParams
        ? action.data.urlParams.reduce((prev, current) => {
            return `${prev}/${current}`
          }, '')
        : ''

      const updatedBuilderData = {
        ...data.builderData,
        pages: {
          ...data.builderData.pages,
          [action.data.id]: {
            ...pageToUpdate,
            friendlyName: action.data.friendlyName || '',
            description: action.data.description || '',
            route: newRoute,
          },
        },
      }

      return {
        ...data,
        builderData: updatedBuilderData,
      }

    case 'deletePage':
      const newState = {
        ...data,
        pages: data.pages.filter(page => page !== action.data.id),
      }
      delete newState.builderData.pages[action.data.id]
      return {
        ...newState,
        builderData: {
          ...newState.builderData,
          pages: {
            ...newState.builderData.pages,
          },
        },
      }

    case 'createComponent':
      const stateCreateComponent = {
        ...data,
        builderData: {
          ...data.builderData,
          pages: {
            ...data.builderData.pages,
            [data.selectedPage]: {
              ...data.builderData.pages[data.selectedPage],
            },
          },
          components: {
            ...data.builderData.components,
          },
        },
      }
      let orderIds: string[] = []
      if (action.data.parentId === data.selectedPage) {
        orderIds = [
          ...(stateCreateComponent.builderData.pages[action.data.parentId].children || []),
        ]
        stateCreateComponent.builderData.pages[action.data.parentId].children?.push(action.data.id)
      } else {
        orderIds = [
          ...(stateCreateComponent.builderData.components[action.data.parentId].children || []),
        ]
        stateCreateComponent.builderData.components[action.data.parentId].children?.push(
          action.data.id
        )
      }
      stateCreateComponent.builderData.components[action.data.id] = newComponentFactory(
        action.data,
        Math.max(
          0,
          ...orderIds.map(componentId => {
            return stateCreateComponent.builderData.components[componentId].order
          })
        ) + 1,
        false
      )

      return stateCreateComponent

    case 'updateComponent':
      const stateUpdateComponent = {
        ...data,
        builderData: {
          ...data.builderData,
          components: {
            ...data.builderData.components,
            [action.data.id]: {
              ...data.builderData.components[action.data.id],
              props: action.data.newProps,
            },
          },
        },
      }
      return stateUpdateComponent

    case 'deleteComponent':
      const componentToDelete = data.builderData.components[action.data.id]
      const newDeleteComponentState = {
        ...data,
        builderData: {
          ...data.builderData,
          components: {
            ...data.builderData.components,
          },
        },
      }

      if (componentToDelete.parentId === data.selectedPage) {
        newDeleteComponentState.builderData.pages = {
          ...data.builderData.pages,
          [data.selectedPage]: {
            ...data.builderData.pages[data.selectedPage],
            children: data.builderData.pages[data.selectedPage].children?.filter(
              childrenId => childrenId !== action.data.id
            ),
          },
        }
      } else {
        newDeleteComponentState.builderData.components = {
          ...data.builderData.components,
          [componentToDelete.parentId]: {
            ...data.builderData.components[componentToDelete.parentId],
            children: data.builderData.components[componentToDelete.parentId].children?.filter(
              childrenId => childrenId !== action.data.id
            ),
          },
        }
      }

      delete newDeleteComponentState.builderData.components[action.data.id]
      return newDeleteComponentState
    case 'visibilityComponent':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          components: {
            ...data.builderData.components,
            [action.data.id]: {
              ...data.builderData.components[action.data.id],
              hidden: !data.builderData.components[action.data.id].hidden,
            },
          },
        },
      }
    case 'moveUpComponent':
      const targetMoveUpComponent = data.builderData.components[action.data.id]
      if (
        targetMoveUpComponent.order !== action.data.currentPosition &&
        targetMoveUpComponent.order > 0
      ) {
        return data
      }
      const brotherMoveUpComponents =
        targetMoveUpComponent.parentId === data.selectedPage
          ? data.builderData.pages[targetMoveUpComponent.parentId].children
              ?.map((brotherId: string) => {
                return brotherId !== targetMoveUpComponent.id
                  ? data.builderData.components[brotherId]
                  : undefined
              })
              .filter(e => !!e)
          : data.builderData.components[targetMoveUpComponent.parentId].children
              ?.map((brotherId: string) => {
                return brotherId !== targetMoveUpComponent.id
                  ? data.builderData.components[brotherId]
                  : undefined
              })
              .filter(e => !!e)

      let newDataMoveUp: IBuilderDataContext
      if (brotherMoveUpComponents?.length) {
        const { componentToUpdate, componentToReplace } = moveUpElement(
          targetMoveUpComponent,
          brotherMoveUpComponents
        )

        newDataMoveUp = {
          ...data,
          builderData: {
            ...data.builderData,
            components: {
              ...data.builderData.components,
              [action.data.id]: { ...componentToUpdate },
            },
          },
        }

        if (componentToReplace) {
          newDataMoveUp.builderData.components[componentToReplace.id] = {
            ...componentToReplace,
          }
        }
      } else {
        targetMoveUpComponent.order = 0
        newDataMoveUp = {
          ...data,
          builderData: {
            ...data.builderData,
            components: {
              ...data.builderData.components,
              [action.data.id]: { ...targetMoveUpComponent },
            },
          },
        }
      }

      return newDataMoveUp

    case 'moveDownComponent':
      const targetMoveDownComponent = data.builderData.components[action.data.id]

      if (targetMoveDownComponent.order !== action.data.currentPosition) {
        return { ...data }
      }
      const brotherMoveDownComponents =
        targetMoveDownComponent.parentId === data.selectedPage
          ? data.builderData.pages[targetMoveDownComponent.parentId].children
              ?.map((brotherId: string) => {
                return brotherId !== targetMoveDownComponent.id
                  ? data.builderData.components[brotherId]
                  : undefined
              })
              .filter(e => !!e)
          : data.builderData.components[targetMoveDownComponent.parentId].children
              ?.map((brotherId: string) => {
                return brotherId !== targetMoveDownComponent.id
                  ? data.builderData.components[brotherId]
                  : undefined
              })
              .filter(e => !!e)

      let newDataMoveDown: IBuilderDataContext
      if (brotherMoveDownComponents?.length) {
        const { componentToUpdate, componentToReplace } = moveDownElement(
          targetMoveDownComponent,
          brotherMoveDownComponents
        )
        newDataMoveDown = {
          ...data,
          builderData: {
            ...data.builderData,
            components: {
              ...data.builderData.components,
              [action.data.id]: { ...componentToUpdate },
            },
          },
        }

        if (componentToReplace) {
          newDataMoveDown.builderData.components[componentToReplace.id] = {
            ...componentToReplace,
          }
        }
      } else {
        targetMoveDownComponent.order = 0
        newDataMoveDown = {
          ...data,
          builderData: {
            ...data.builderData,
            components: {
              ...data.builderData.components,
              [action.data.id]: { ...targetMoveDownComponent },
            },
          },
        }
      }

      return newDataMoveDown

    case 'setSelectedPage':
      return {
        ...data,
        selectedPage: action.data,
      }

    default:
      break
  }

  return data
}
