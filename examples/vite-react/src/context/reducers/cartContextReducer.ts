export interface ICartContext {
  count: number
}

export type TCartContextAction = ISetCountAction

export interface ISetCountAction {
  type: 'setCount'
  data: {
    count: number
  }
}

export const initialCartContextState = {
  count: 0,
}

export const cartContextReducer = (data: ICartContext, action: TCartContextAction) => {
  switch (action.type) {
    case 'setCount':
      return {
        ...data,
        count: action.data.count,
      }

    default:
      break
  }
  return data
}
