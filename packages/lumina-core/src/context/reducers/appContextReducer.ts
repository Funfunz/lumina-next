import { apiDispatcher } from '../apiDispatcher'
import { IComponentProps } from '@/models/data'

export interface IAppContext {
  params: Record<string, string>
  isEditor: boolean
  pathComponents: string[]
  selectedPage: string
  isMobile?: boolean
}

export type TAppContextAction = IUpdateBackendAction | IResetAppContextAction | ISetIsMobileAction

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

export interface ISetIsMobileAction {
  type: 'setIsMobile'
  data: boolean
}

export const initialAppContextState = {
  selectedPage: '',
  params: {},
  isEditor: false,
  pathComponents: [],
  isMobile: false,
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
    case 'setIsMobile':
      return {
        ...data,
        isMobile: action.data,
      }

    default:
      break
  }
  return data
}
