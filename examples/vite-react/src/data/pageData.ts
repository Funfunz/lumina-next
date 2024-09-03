import { IData } from '@lumina/core'

const data: IData = {
  home: {
    id: 'page1',
    pageName: 'Homepage',
    friendlyName: 'Homepage',
    extendedName: 'Homepage for Lumina Page Builder',
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
        id: 'grid1',
        friendlyName: 'grid1',
        type: 'gridContainer',
        order: 2,
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
                  srcDesktop: 'https://picsum.photos/1240/400',
                  srcTablet: 'https://picsum.photos/900/400',
                  srcMobile: 'https://picsum.photos/576/400',
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
        id: 'grid3',
        friendlyName: 'grid3',
        type: 'gridContainer',
        order: 3,
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
            children: [],
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
            children: [],
          },
        ],
      },
    ],
  },
}

export default data
