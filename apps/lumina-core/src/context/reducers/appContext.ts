import { apiDispatcher } from "../apiDispatcher";
import { IComponentProps } from '@/data/data';

export interface IAppContext {
  editor: boolean
}

export type TAppContextAction = IUpdateBackendAction

export interface IUpdateBackendAction {
  type: 'updateBackend'
  data: {
    props: IComponentProps,
    id: string
  }
}

export const initialAppContextState = {
  editor: false
}

export const appContextReducer = (data: IAppContext, action: TAppContextAction) => {
  switch (action.type) {
    case 'updateBackend':
      apiDispatcher(action.data)
      break;

    default:
      break;
  }
  return data
}