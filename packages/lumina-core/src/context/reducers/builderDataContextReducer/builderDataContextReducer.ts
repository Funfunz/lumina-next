import { IData, IPageData } from '@/models/data'
import { ICreatePageAction, IDeletePageAction, IUpdatePageAction } from './actions/pageActions'
import {
  ICreateComponentAction,
  IDeleteComponentAction,
  IMoveDownComponentAction,
  IMoveUpComponentAction,
  IUpdateComponentAction,
  IVisibleComponentAction,
} from './actions/componentActions'
import {
  createElementAt,
  updateElement,
  deleteElement,
  toggleVisibilityElement,
  moveUpElement,
  moveDownElement,
} from './helpers'
import { ISetBuilderDataAction } from './actions/builderActions'

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

export const initialBuilderDataContextState = {
  builderData: {},
  selectedPage: '',
  pages: [],
}

export const builderDataContextReducer = (
  data: IBuilderDataContext,
  action: TBuilderDataContextActions
) => {
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
      const newPage: IPageData = {
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
          [route]: newPage,
        },
        pages: [...data.pages, route],
      }

    case 'updatePage':
      const { id, newData } = action.data
      const pageToUpdate = data.builderData[id]
      if (!pageToUpdate) {
        return data
      }

      const newRoute = action.data.newData.urlParams
        ? action.data.newData.urlParams.reduce((prev, current) => {
            return `${prev}/${current}`
          }, '')
        : pageToUpdate.route

      const updatedBuilderData = {
        ...data.builderData,
        [id]: {
          ...pageToUpdate,
          friendlyName: newData.friendlyName,
          description: newData.description,
          route: newRoute,
        },
      }

      return {
        ...data,
        builderData: updatedBuilderData,
      }

    case 'deletePage':
      const newState = {
        ...data,
        builderData: {
          ...data.builderData,
        },
        pages: data.pages.filter(page => page !== action.data.route),
      }
      delete newState.builderData[action.data.route]
      return newState

    case 'createComponent':
      const stateCreateComponent = {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            ...createElementAt(data.builderData[data.selectedPage], action.data),
          },
        },
      }
      return stateCreateComponent

    case 'updateComponent':
      const stateUpdateComponent = {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...updateElement(
                // Confirmar se a data é undefined ou não
                data.builderData[data.selectedPage].children!,
                action.data.id,
                action.data.newProps
              ),
            ],
          },
        },
      }
      return stateUpdateComponent

    case 'deleteComponent':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...deleteElement(
                // Confirmar se a data é undefined ou não
                data.builderData[data.selectedPage].children!,
                action.data.id
              ),
            ],
          },
        },
      }
    case 'visibilityComponent':
      const updatedChildren = toggleVisibilityElement(
        data.builderData[data.selectedPage].children!,
        action.data.id
      )
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: updatedChildren,
          },
        },
      }
    case 'moveUpComponent':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...moveUpElement(
                // Confirmar se a data é undefined ou não
                data.builderData[data.selectedPage].children!,
                action.data
              ),
            ],
          },
        },
      }

    case 'moveDownComponent':
      return {
        ...data,
        builderData: {
          ...data.builderData,
          [data.selectedPage]: {
            ...data.builderData[data.selectedPage],
            children: [
              ...moveDownElement(data.builderData[data.selectedPage].children!, action.data),
            ],
          },
        },
      }

    default:
      break
  }

  return data
}
