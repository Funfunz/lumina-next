import { apiDispatcher } from "../apiDispatcher";
import { IComponentProps } from '@/data/data';

export interface IAppContext {
  editor: boolean
}

export interface IAppContextAction {
  type: string
  data: IUpdateBackendAction
}

export interface IUpdateBackendAction {
  props: IComponentProps,
  id: string
}

export const initialAppContextState = {
  editor: false
}

export const contextReducer = (data: IAppContext, action: IAppContextAction) => {
  switch (action.type) {
    case 'updateBackend':
      apiDispatcher(action.data)
      break;
  
    default:
      break;
  }
  return data
}