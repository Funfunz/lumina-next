import { IData } from '@/models/data'

export interface IBuilderDataContext {
  builderData: IData
  selectedPage: string
  pages: string[]
}

export interface ISetBuilderDataAction {
  type: 'setBuilderData'
  data: IBuilderDataContext
}
