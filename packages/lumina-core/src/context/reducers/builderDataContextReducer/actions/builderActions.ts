import { IBuilderDataContext } from '../builderDataContextReducer.js'

export interface ISetBuilderDataAction {
  type: 'setBuilderData'
  data: IBuilderDataContext
}

export interface ISetSelectedPageAction {
  type: 'setSelectedPage'
  data: string
}
