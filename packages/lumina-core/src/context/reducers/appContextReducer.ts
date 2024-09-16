import { apiDispatcher } from '../apiDispatcher'
import { IComponentProps } from '@/models/data'

export interface IAppContext {
  params: Record<string, string>
  isEditor: boolean
  pathComponents: string[]
  selectedPage: string
}

export type TAppContextAction = IUpdateBackendAction | IResetAppContextAction

export interface IUpdateBackendAction {
  type: 'updateBackend'
  data: {
    props: IComponentProps
    id: string
  }
}

export interface IResetAppContextAction {
  type: 'resetAppContext'
  data: IAppContext
}

export const initialAppContextState = {
  selectedPage: '',
  params: {},
  isEditor: false,
  pathComponents: [],
}

export const appContextReducer = (data: IAppContext, action: TAppContextAction) => {
  switch (action.type) {
    case 'updateBackend':
      apiDispatcher(action.data)
      break
    case 'resetAppContext':
      return {
        ...action.data,
      }

    default:
      break
  }
  return data
}
