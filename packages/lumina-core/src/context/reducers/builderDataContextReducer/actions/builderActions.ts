import { IBuilderDataContext } from '../builderDataContextReducer'

export interface ISetBuilderDataAction {
  type: 'setBuilderData'
  data: IBuilderDataContext
}

export interface ISetSelectedPageAction {
  type: 'setSelectedPage'
  data: string
}
