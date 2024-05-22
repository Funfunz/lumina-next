/* supports server side render
*  do not use useEffect, it makes the component render on the frontend
*/

import { ContextProvider } from './LinkboxContext'
import { LinkBoxInternal } from './linkBoxInternal'

type TProps = {
  id: string
  href: string
  title: string
  description: string
  color: 'black' | 'white' | 'green' | 'yellow'
}

export const LinkBox = ({id, title, description, href, color = 'black'}: TProps) => {
  return (
    <ContextProvider
      data={{id, title, description, href, color}}
    >
      <LinkBoxInternal/>
    </ContextProvider>
    
  )
}