import { IBuilderDataContext } from '../builderDataContextReducer'

export interface ISetBuilderDataAction {
  type: 'setBuilderData'
  data: IBuilderDataContext
}
