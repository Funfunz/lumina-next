# Context

The context is separated into two sections
- appContext
- builderDataContext

## appContext

Application context used to manage the state of the builder visually
It will define if the builder is visible, open, closed, etc.

```json
{
  "editor": true
}
```

```ts
interface IappContext {
  editor: boolean
}

```

## builderDataContext

Builder data context used to manage the data that structures the pages. It's the base for all pages structure and component data.

```json
{
  "home": {
    "friendlyName": "Homepage",
    "children": [
      {
        "id": "image1",
        "type": "image",
        "props": {
          "alt": "paris",
          "href": "https://www.w3schools.com/css/paris.jpg"
        }
      },
      {
        "id": "grid1",
        "type": "grid",
        "children": [
          {
            "id": "flex1_1",
            "type": "flex",
            "props": {
              "style": "column"
            },
            "children": [
              {
                "id": "linkBox1_1_!",
                "type": "linkBox",
                "props": {
                  "title": "Docs",
                  "description": "Find in-depth information about Next.js features and API.",
                  "href": "https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                }
              },
              {
                "id": "titleText1_1_1",
                "type": "titleText",
                "props": {
                  "title": "This is a title",
                  "text": "And this is some text"
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```

### IBuilderDataContext

This is the root of the builder data context, each property should be a pageId.

```ts

interface IBuilderDataContext {
  [pageId: string]: {
    friendlyName: string,
    children: IComponent[]
  }
}

```

For the component context, the **type** property needs to be equal to the developed components.

If **type = "flex"** then a component named **flex** needs to exist on the application structure. 

```ts

interface IComponent {
  id: string,
  type: string,
  props?: TProps,
  children?: IComponent[]
}

type TProps = Record<string, unknown>

```