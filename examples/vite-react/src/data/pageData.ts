import { IData } from "@repo/lumina-core";

const data: IData = {
  home: {
    id: "page1",
    pageName: "Homepage",
    friendlyName: "Homepage",
    extendedName: "Homepage for Lumina Page Builder",
    dateModified: "18.06.2024",
    status: "active",
    route: "/",
    children: [
      {
        id: "image1test",
        friendlyName: "image1test",
        type: "image",
        order: 0,
        props: {
          alt: "paris",
          href: "https://www.w3schools.com/css/paris.jpg",
        },
      },
      {
        id: "grid1",
        friendlyName: "grid1",
        type: "grid",
        order: 1,
        children: [
          {
            id: "flex1",
            friendlyName: "flex1",
            order: 0,
            type: "flex",
            props: {
              style: "column",
            },
            children: [
              {
                id: "linkBox1_1",
                friendlyName: "linkBox1_1",
                order: 1,
                type: "linkBox",
                props: {
                  title: "Docs",
                  description:
                    "Find in-depth information about Next.js features and API.",
                  href: "https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
                },
              },
              {
                id: "title1_1",
                friendlyName: "title1_1",
                order: 2,
                type: "title",
                props: {
                  title: "This is a title",
                },
              },
            ],
          },
        ],
      },
      {
        id: "grid3",
        friendlyName: "grid3",
        type: "grid",
        order: 2,
        children: [
          {
            id: "grid4",
            friendlyName: "grid4",
            type: "grid",
            order: 0,
            children: [
              {
                id: "grid4image1",
                friendlyName: "grid4image1",
                type: "image",
                order: 0,
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
              {
                id: "grid4image2",
                friendlyName: "grid4image2",
                type: "image",
                order: 1,
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
            ],
          },
          {
            id: "grid5",
            friendlyName: "grid5",
            order: 1,
            type: "grid",
            children: [
              {
                id: "grid5image1",
                friendlyName: "grid5image1",
                order: 0,
                type: "image",
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
              {
                id: "grid5image2",
                friendlyName: "grid5image2",
                order: 1,
                type: "image",
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  About: {
    id: "page2",
    route: "/about",
    pageName: "About",
    friendlyName: "About",
    extendedName: "About for Lumina Page Builder",
    dateModified: "21.06.2024",
    status: "active",
    children: [
      {
        id: "image1test",
        friendlyName: "image1test",
        type: "image",
        order: 0,
        props: {
          alt: "paris",
          href: "https://www.w3schools.com/css/paris.jpg",
        },
      },
      {
        id: "grid1",
        friendlyName: "grid1",
        type: "grid",
        order: 1,
        children: [
          {
            id: "flex1",
            friendlyName: "flex1",
            order: 0,
            type: "flex",
            props: {
              style: "column",
            },
            children: [
              {
                id: "linkBox1_1",
                friendlyName: "linkBox1_1",
                order: 1,
                type: "linkBox",
                props: {
                  title: "Docs",
                  description:
                    "Find in-depth information about Next.js features and API.",
                  href: "https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
                },
              },
              {
                id: "titleText1_1",
                friendlyName: "titleText1_1",
                order: 2,
                type: "titleText",
                props: {
                  title: "This is a title",
                  text: "And this is some text",
                },
              },
            ],
          },
        ],
      },
      {
        id: "grid3",
        friendlyName: "grid3",
        type: "grid",
        order: 2,
        children: [
          {
            id: "grid4",
            friendlyName: "grid4",
            type: "grid",
            order: 0,
            children: [
              {
                id: "grid4image1",
                friendlyName: "grid4image1",
                type: "image",
                order: 0,
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
              {
                id: "grid4image2",
                friendlyName: "grid4image2",
                type: "image",
                order: 1,
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
            ],
          },
          {
            id: "grid5",
            friendlyName: "grid5",
            order: 1,
            type: "grid",
            children: [
              {
                id: "grid5image1",
                friendlyName: "grid5image1",
                order: 0,
                type: "image",
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
              {
                id: "grid5image2",
                friendlyName: "grid5image2",
                order: 1,
                type: "image",
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  Contacts: {
    id: "page3",
    pageName: "Contacts",
    friendlyName: "Contacts",
    route: "/contacts",
    extendedName: "Contacts for Lumina Page Builder",
    dateModified: "21.03.2022",
    status: "inactive",
    children: [
      {
        id: "image1test",
        friendlyName: "image1test",
        type: "image",
        order: 0,
        props: {
          alt: "paris",
          href: "https://www.w3schools.com/css/paris.jpg",
        },
      },
      {
        id: "grid1",
        friendlyName: "grid1",
        type: "grid",
        order: 1,
        children: [
          {
            id: "flex1",
            friendlyName: "flex1",
            order: 0,
            type: "flex",
            props: {
              style: "column",
            },
            children: [
              {
                id: "linkBox1_1",
                friendlyName: "linkBox1_1",
                order: 1,
                type: "linkBox",
                props: {
                  title: "Docs",
                  description:
                    "Find in-depth information about Next.js features and API.",
                  href: "https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
                },
              },
              {
                id: "titleText1_1",
                friendlyName: "titleText1_1",
                order: 2,
                type: "titleText",
                props: {
                  title: "This is a title",
                  text: "And this is some text",
                },
              },
            ],
          },
        ],
      },
      {
        id: "grid3",
        friendlyName: "grid3",
        type: "grid",
        order: 2,
        children: [
          {
            id: "grid4",
            friendlyName: "grid4",
            type: "grid",
            order: 0,
            children: [
              {
                id: "grid4image1",
                friendlyName: "grid4image1",
                type: "image",
                order: 0,
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
              {
                id: "grid4image2",
                friendlyName: "grid4image2",
                type: "image",
                order: 1,
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
            ],
          },
          {
            id: "grid5",
            friendlyName: "grid5",
            order: 1,
            type: "grid",
            children: [
              {
                id: "grid5image1",
                friendlyName: "grid5image1",
                order: 0,
                type: "image",
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
              {
                id: "grid5image2",
                friendlyName: "grid5image2",
                order: 1,
                type: "image",
                props: {
                  alt: "paris",
                  href: "https://www.w3schools.com/css/paris.jpg",
                },
              },
            ],
          },
        ],
      },
    ],
  },
};

export default data;
