import { IConnectorData } from '@lumina/core'

const data: IConnectorData = {
  ['page1']: {
    id: 'page1',
    friendlyName: 'Homepage',
    description: 'Homepage for Lumina Page Builder',
    dateModified: '18.06.2024',
    status: 'active',
    route: '/',
    children: [
      {
        id: 'menu_e9keea0jop',
        type: 'menu',
        friendlyName: 'menu',
        children: [],
        order: 1,
        hidden: false,
        props: {},
      },
      {
        id: 'container_dr1ipftw92',
        type: 'container',
        friendlyName: 'MainContainer',
        children: [
          {
            id: 'spacer_4z4da61m96',
            type: 'spacer',
            friendlyName: 'spacer1',
            children: [],
            order: 2,
            hidden: false,
            props: {
              size: 4,
            },
          },
          {
            id: 'grid1',
            friendlyName: 'grid1',
            type: 'gridContainer',
            order: 3,
            hidden: false,
            children: [
              {
                id: 'gridItem_zgkr8hkall',
                type: 'gridItem',
                friendlyName: 'grimItem1',
                children: [
                  {
                    id: 'title_z5iwnev3h2',
                    type: 'title',
                    friendlyName: 'title1',
                    children: [],
                    order: 2,
                    hidden: false,
                    props: {
                      title: 'This is a title',
                    },
                  },
                  {
                    id: 'text_jzmfscqb1x',
                    type: 'text',
                    friendlyName: 'text1',
                    children: [],
                    order: 3,
                    hidden: false,
                    props: {
                      text: 'This is some text!',
                    },
                  },
                  {
                    id: 'button_k9x1q13efm',
                    type: 'button',
                    friendlyName: 'button1',
                    children: [],
                    order: 4,
                    hidden: false,
                    props: {
                      text: 'Follow for more',
                      variant: 'contained',
                    },
                  },
                  {
                    id: 'addToCartButton_khvsm0hzou',
                    type: 'addToCartButton',
                    friendlyName: 'addToCartButton1',
                    children: [],
                    order: 5,
                    hidden: false,
                    props: {
                      variant: 'contained',
                      color: 'secondary',
                    },
                  },
                ],
                order: 1,
                hidden: false,
                props: {
                  size: 6,
                },
              },
              {
                id: 'gridItem_brwc966rum',
                type: 'gridItem',
                friendlyName: 'gridItem2',
                children: [
                  {
                    id: 'image_2814lz6srf',
                    type: 'image',
                    friendlyName: 'image1',
                    children: [],
                    order: 1,
                    hidden: false,
                    props: {
                      href: 'https://picsum.photos/400/200',
                      srcDesktop: 'https://picsum.photos/1240/400?random=1',
                      srcTablet: 'https://picsum.photos/900/400?random=2',
                      srcMobile: 'https://picsum.photos/576/400?random=3',
                    },
                  },
                ],
                order: 2,
                hidden: false,
                props: {
                  size: 6,
                },
              },
            ],
            props: {
              columnSpacing: 4,
              rowSpacing: 0,
              spacing: 0,
              direction: 'row',
            },
          },
          {
            id: 'spacer_quw3fgi3sb',
            type: 'spacer',
            friendlyName: 'spacer2',
            children: [],
            order: 4,
            hidden: false,
            props: {
              size: 4,
            },
          },
          {
            id: 'grid3',
            friendlyName: 'grid3',
            type: 'gridContainer',
            order: 7,
            hidden: false,
            children: [
              {
                id: 'gridItem_8qx0vecrnj',
                type: 'gridItem',
                friendlyName: 'gridItem1',
                children: [
                  {
                    id: 'image_q8n93e9oce',
                    type: 'image',
                    friendlyName: 'image1',
                    children: [],
                    order: 1,
                    hidden: false,
                    props: {
                      srcDesktop: 'https://picsum.photos/1240/400?random=4',
                      srcMobile: 'https://picsum.photos/576/400?random=6',
                      srcTablet: 'https://picsum.photos/900/400?random=5',
                    },
                  },
                ],
                order: 2,
                hidden: false,
                props: {
                  size: 6,
                },
              },
              {
                id: 'gridItem_o6bq0ljh4l',
                type: 'gridItem',
                friendlyName: 'gridItem2',
                children: [
                  {
                    id: 'image_vtp0onmw9u',
                    type: 'image',
                    friendlyName: 'image1',
                    children: [],
                    order: 1,
                    hidden: false,
                    props: {
                      srcDesktop: 'https://picsum.photos/1240/400?random=7',
                      srcMobile: 'https://picsum.photos/576/400?random=9',
                      srcTablet: 'https://picsum.photos/900/400?random=8',
                    },
                  },
                ],
                order: 3,
                hidden: false,
                props: {
                  size: 6,
                },
              },
            ],
            props: {
              direction: 'row',
            },
          },
        ],
        order: 2,
        hidden: false,
        props: {},
      },
    ],
  },
  page2: {
    id: 'page2',
    friendlyName: 'Product Page',
    description: 'Product Page for Lumina Page Builder',
    dateModified: '18.06.2024',
    status: 'active',
    route: '/product/:productId',
    children: [
      {
        id: 'menu_e9keea0jos',
        type: 'menu',
        friendlyName: 'menu',
        children: [],
        order: 1,
        hidden: false,
        props: {},
      },
      {
        id: 'container_dr1ipftw91',
        type: 'container',
        friendlyName: 'MainContainer',
        children: [
          {
            id: 'breadcrumb_2a1htdjfjq',
            type: 'breadcrumb',
            friendlyName: 'Breadcrumb1',
            children: [],
            order: 4,
            hidden: false,
            props: {},
          },
          {
            id: 'spacer_quw3fgi3sc',
            type: 'spacer',
            friendlyName: 'spacer2',
            children: [],
            order: 5,
            hidden: false,
            props: {
              size: 4,
            },
          },
          {
            id: 'product_2mawfxk4v0',
            type: 'product',
            friendlyName: 'product1',
            children: [],
            order: 6,
            hidden: false,
            props: {
              productId: 'productIdFromProps',
            },
          },
        ],
        order: 2,
        hidden: false,
        props: {},
      },
    ],
  },
}

export default data
