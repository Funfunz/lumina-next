import { TParsedRoute } from '@/utils/routerParser'
import { apiDispatcher } from '../apiDispatcher'
import { IComponentProps } from '@/models/data'

export interface IAppContext extends TParsedRoute {}

export type TAppContextAction = IUpdateBackendAction

export interface IUpdateBackendAction {
  type: 'updateBackend'
  data: {
    props: IComponentProps
    id: string
  }
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

    default:
      break
  }
  return data
}
