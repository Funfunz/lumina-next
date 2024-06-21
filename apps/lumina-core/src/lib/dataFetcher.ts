import data from '@/data/data.json'
import { IData } from "@/data/data"

export async function getData(pageName: string) {
  return (data as unknown as IData)[pageName || 'home'] || {}
}

export async function getFullData() {
  return (data as unknown as IData)
}

export async function getPages() {
  return Object.keys(data)
}
