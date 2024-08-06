import data from '../data/pageData'
import { IData, IPageData } from '@lumina/core'

export async function getData(pageName: string): Promise<IPageData> {
  return data[pageName || 'home'] || {}
}

export async function getFullData(): Promise<IData> {
  return data
}

export async function getPages(): Promise<string[]> {
  return Object.keys(data)
}
