import { EditorButtonsContainer, useAppContext } from '@lumina/core'
import { Grid } from '../grid/grid'
import { GridItem } from '../gridItem/gridItem'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { data } from './data'
import { config } from './config'
import Typography from '@mui/material/Typography'
import styles from './product.module.scss'
import Rating from '@mui/material/Rating'

type TProps = {
  id: string
  productId: string
}

export const Product = ({ id, productId }: TProps) => {
  const { params } = useAppContext()
  const product = data[params.productId || productId]
  if (!product) return null
  const productRateNumber = Number(product.rate)
  return (
    <Grid noEditor id={id} style={{ position: 'relative' }} columnSpacing={20}>
      <GridItem noEditor id='someid' size={6}>
        <Typography variant='h1' marginTop={6}>
          {product.productName}
        </Typography>
        <Grid noEditor id={id} alignItems='center' marginTop={3}>
          <GridItem noEditor id='someid' size={4}>
            <Typography variant='h6' fontWeight={700}>
              ${product.price}
            </Typography>
          </GridItem>
          <GridItem
            noEditor
            id='someid'
            size={8}
            sx={{
              textAlign: 'right',
              alignItems: 'center',
              justifyContent: 'flex-end',
              display: 'flex',
            }}
          >
            <Rating
              name='half-rating-read'
              defaultValue={productRateNumber}
              precision={0.5}
              readOnly
              sx={{
                marginRight: 1,
              }}
            />
            <span>
              {product.rate}/5.0 ({product.rateCount})
            </span>
          </GridItem>
          <EditorButtonsContainer id={id} config={config} componentProps={{ productId }} />
        </Grid>
        <Typography variant='body1' marginTop={6.5}>
          {product.description}
        </Typography>
      </GridItem>
      <GridItem noEditor id='someid' size={6}>
        <Carousel showIndicators={false}>
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
