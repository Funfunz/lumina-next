import data from '../data/pageData'
import { IConnectorData, IPageData } from '@lumina/core'

export async function getData(pageName: string): Promise<IPageData> {
  return data[pageName || 'home'] || {}
}

export async function getFullData(): Promise<IConnectorData> {
  return data
}

export async function getPages(): Promise<string[]> {
  return Object.keys(data)
}
