import { EditorButtonsContainer, useAppContext } from '@lumina/core'
import { Grid } from '../grid/grid'
import { GridItem } from '../gridItem/gridItem'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { data } from './data'
import { config } from './config'
import Typography from '@mui/material/Typography'
import styles from './product.module.scss'

type TProps = {
  id: string
  productId: string
}

export const Product = ({ id, productId }: TProps) => {
  const { params } = useAppContext()
  const product = data[params.productId || productId]
  if (!product) return null
  return (
    <Grid noEditor id={id} style={{ position: 'relative' }} columnSpacing={20}>
      <GridItem noEditor id='someid' size={6}>
        <Typography variant='h1' gutterBottom>
          {product.productName}
        </Typography>
        <Grid noEditor id={id} alignItems='center'>
          <GridItem noEditor id='someid' size={6}>
            <Typography variant='h6' fontWeight={700} gutterBottom>
              {product.price}
            </Typography>
          </GridItem>
          <GridItem noEditor id='someid' size={6} textAlign='right'>
            <span>
              {product.rate}/5.0 ({product.rateCount})
            </span>
          </GridItem>
          <EditorButtonsContainer id={id} config={config} componentProps={{ productId }} />
        </Grid>
        <p>{product.description}</p>
      </GridItem>
      <GridItem noEditor id='someid' size={6}>
        <Carousel showIndicators={false} showStatus={false}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img className={styles.image} src={image} />
            </div>
          ))}
        </Carousel>
      </GridItem>
      <EditorButtonsContainer id={id} config={config} componentProps={{ productId }} />
    </Grid>
  )
}
