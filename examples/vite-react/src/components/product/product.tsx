import { EditorButtonsContainer, useAppContext } from '@lumina/core'
import { config } from './config'

type TProps = {
  id: string
  productId: string
}

export const Product = ({ id, productId }: TProps) => {
  const { params } = useAppContext()
  console.log({ params })

  return (
    <div>
      {productId || params.productId}
      <EditorButtonsContainer id={id} config={config} componentProps={{ id }} />
    </div>
  )
}
