import data from '@/data/data.json'
import { IData } from "@/data/data"

export async function getData(pageName: string) {
  return (data as IData)[pageName || 'home']
}