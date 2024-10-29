import { IComponentProps } from '@/models/data.js'

export interface IUpdateBackendData {
  props: IComponentProps
  id: string
}

export const apiDispatcher = (data: IUpdateBackendData) => {
  console.log(data)
}
