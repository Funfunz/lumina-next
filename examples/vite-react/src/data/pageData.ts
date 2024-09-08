import { IData } from '@lumina/core'

const data: IData = {
  homePage: {
    id: 'page1',
    friendlyName: 'Homepage',
    description: 'Homepage for Lumina Page Builder',
    dateModified: '18.06.2024',
    status: 'active',
    route: '/',
    children: [
      {
        id: 'image1test',
        friendlyName: 'image1test',
        type: 'image',
        order: 0,
        hidden: false,
        props: {
          alt: 'paris',
          href: 'https://www.w3schools.com/css/paris.jpg',
        },
      },
      {
        id: 'grid1',
        friendlyName: 'grid1',
        type: 'grid',
        order: 1,
        hidden: false,
        children: [
          {
            id: 'flex1',
            friendlyName: 'flex1',
            order: 0,
            type: 'flex',
            hidden: false,
            props: {
              style: 'column',
            },
            children: [
              {
                id: 'linkBox1_1',
                friendlyName: 'linkBox1_1',
                order: 1,
                type: 'linkbox',
                hidden: false,
                props: {
                  title: 'Docs',
                  description: 'Find in-depth information about Next.js features and API.',
                  href: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
                },
              },
              {
                id: 'title1_1',
                friendlyName: 'title1_1',
                order: 2,
                type: 'title',
                hidden: false,
                props: {
                  title: 'This is a title',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'grid3',
        friendlyName: 'grid3',
        type: 'grid',
        order: 2,
        hidden: false,
        children: [
          {
            id: 'grid4image1',
            friendlyName: 'grid4image1',
            type: 'image',
            order: 0,
            hidden: false,
            props: {
              alt: 'paris',
              href: 'https://www.w3schools.com/css/paris.jpg',
            },
          },
          {
            id: 'grid4image2',
            friendlyName: 'grid4image2',
            type: 'image',
            hidden: false,
            order: 1,
            props: {
              alt: 'paris',
              href: 'https://www.w3schools.com/css/paris.jpg',
            },
          },
        ],
      },
    ],
  },
  ['productPage']: {
    id: 'page2',
    friendlyName: 'Homepage',
    description: 'Homepage for Lumina Page Builder',
    dateModified: '18.06.2024',
    status: 'active',
    route: '/product/:productId',
    children: [
      {
        id: 'image1test',
        friendlyName: 'image1test',
        type: 'image',
        order: 0,
        hidden: false,
        props: {
          alt: 'paris',
          href: 'https://www.w3schools.com/css/paris.jpg',
        },
      },
      {
        id: 'grid1',
        friendlyName: 'grid1',
        type: 'grid',
        order: 1,
        hidden: false,
        children: [
          {
            id: 'flex1',
            friendlyName: 'flex1',
            order: 0,
            type: 'flex',
            hidden: false,
            props: {
              style: 'column',
            },
            children: [
              {
                id: 'linkBox1_1',
                friendlyName: 'linkBox1_1',
                order: 1,
                type: 'linkbox',
                hidden: false,
                props: {
                  title: 'Docs',
                  description: 'Find in-depth information about Next.js features and API.',
                  href: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
                },
              },
              {
                id: 'title1_1',
                friendlyName: 'title1_1',
                order: 2,
                type: 'title',
                hidden: false,
                props: {
                  title: 'This is a title',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'grid3',
        friendlyName: 'grid3',
        type: 'grid',
        order: 2,
        hidden: false,
        children: [
          {
            id: 'grid4image1',
            friendlyName: 'grid4image1',
            type: 'image',
            order: 0,
            hidden: false,
            props: {
              alt: 'paris',
              href: 'https://www.w3schools.com/css/paris.jpg',
            },
          },
          {
            id: 'grid4image2',
            friendlyName: 'grid4image2',
            type: 'image',
            hidden: false,
            order: 1,
            props: {
              alt: 'paris',
              href: 'https://www.w3schools.com/css/paris.jpg',
            },
          },
        ],
      },
    ],
  },
}

export default data
