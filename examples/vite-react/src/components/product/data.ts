type TProduct = {
  productName: string
  price: string
  rate: string
  rateCount: string
  description: string
  images: string[]
}

export const data: Record<string, TProduct> = {
  '1': {
    productName: 'Meryl Lounge Chair',
    price: '149.99',
    rate: '4.6',
    rateCount: '556',
    description:
      'The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.',
    images: [
      '/product/img1.png',
      '/product/img2.png',
      '/product/img3.png',
      '/product/img4.png',
      '/product/img5.png',
      '/product/img1.png',
      '/product/img2.png',
      '/product/img3.png',
      '/product/img4.png',
      '/product/img5.png',
    ],
  },
}
