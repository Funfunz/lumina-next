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
      <p>This is a product information component</p>
      <p>
        The product ID is being grabbed by a prop called &quot;productId&quot;
        <br />
        And also from the productId parameter on the URL
      </p>
      <p>
        <b>productId prop:</b> <span style={{ color: 'green' }}>{productId}</span>
        <br />
        <b>productId URL param:</b> <span style={{ color: 'green' }}>{params.productId}</span>
      </p>
      <EditorButtonsContainer id={id} config={config} componentProps={{ id }} />
    </div>
  )
}
