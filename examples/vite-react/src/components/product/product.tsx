import { EditorButtonsContainer, useAppContext } from '@lumina/core'
import { Grid } from '../grid/grid'
import { GridItem } from '../gridItem/gridItem'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { data } from './data'
import { config } from './config'

type TProps = {
  id: string
  productId: string
}

export const Product = ({ id, productId }: TProps) => {
  const { params } = useAppContext()

  return (
    <Grid id={id} style={{ position: 'relative' }}>
      <GridItem id='someid' size={7}>
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
      </GridItem>
      <GridItem id='someid' size={5}>
        <Carousel showIndicators={false} showStatus={false}>
          {data.images.map((image, index) => (
            <div key={index}>
              <img src={image} />
            </div>
          ))}
        </Carousel>
      </GridItem>
      <EditorButtonsContainer id={id} config={config} componentProps={{ productId }} />
    </Grid>
  )
}
