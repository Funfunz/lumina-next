import { type IData } from '@/main'

export type TParsedRoute = {
  selectedPage: string
  params: Record<string, string>
  isEditor: boolean
}

export const routerParser = (pathName: string, builderData: IData): TParsedRoute => {
  const splittedSelectedPathName = pathName.split('/')
  splittedSelectedPathName.shift()
  const isEditor = splittedSelectedPathName[splittedSelectedPathName.length - 1] === 'editor'

  if (isEditor) {
    splittedSelectedPathName.pop()
  }

  const pages = Object.keys(builderData)
  let params: Record<string, string> = {}
  const pageFound = pages.find(pagePath => {
    params = {}
    const splittedPageName = pagePath.split('/')
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
    selectedPage: pageFound || 'home',
    params,
    isEditor,
  }

  return result
}