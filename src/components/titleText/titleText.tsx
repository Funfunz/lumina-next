/* supports server side render
*  do not use useEffect, it makes the component render on the frontend
*/

import { ContextProvider, IInitialStateType } from './titleTextContext'
import { TitleTextComponent } from './titleTextComponent'

interface IProps extends IInitialStateType {
  id: string
}

export const TitleText = ({id, title, text}: IProps) => {  
  return (
    <ContextProvider
      data={{id, title, text}}
    >
      <TitleTextComponent/>
    </ContextProvider>
    
  )
}