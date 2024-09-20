import { type IData } from '@/main'

export type TParsedRoute = {
  selectedPage: string
  params: Record<string, string>
  isEditor: boolean
  pathComponents: string[]
}

export const routerParser = (pathName: string, builderData: IData): TParsedRoute => {
  const splittedSelectedPathName = pathName.split('/')
  splittedSelectedPathName.shift()
  const isEditor = new URLSearchParams(location.search).has('editor', 'true')

  if (isEditor) {
    splittedSelectedPathName.pop()
  }

  const pages = Object.keys(builderData).map(pageId => {
    return {
      id: pageId,
      route: builderData[pageId].route,
    }
  })
  let params: Record<string, string> = {}
  const pageFound = pages.find(({ route }) => {
    params = {}
    const splittedPageName = route.split('/').filter(e => e)
    if (splittedPageName.length === splittedSelectedPathName.length) {
      return (
        splittedPageName.filter((pagePathSection, index) => {
          if (pagePathSection.charAt(0) === ':') {
            params[pagePathSection.replace(':', '')] = splittedSelectedPathName[index]
            return false
          }
          return pagePathSection !== splittedSelectedPathName[index]
        }).length === 0
      )
    }
    return false
  })

  const result = {
    selectedPage: pageFound?.id || pages[0]?.id,
    params,
    isEditor,
    pathComponents: splittedSelectedPathName,
  }

  return result
}
