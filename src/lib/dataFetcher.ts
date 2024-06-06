import data from '@/data/data.json'
import { IComponentData, IData } from "@/data/data"

export async function getData(pageName: string) {
  return (data as IData)[pageName || 'home'] || {}
}

export async function getFullData() {
  return (data as IData)
}

export async function getPages() {
  return Object.keys(data)
}

export const normalizeData = (info: unknown): IComponentData => {
  // Perform type checking inside the function
  if (typeof info === 'object' && info !== null) {
    const data = info as { [key: string]: any };
    // Check if the necessary properties exist
    if ('type' in data && 'id' in data && 'friendlyName' in data && 'order' in data && 'children' in data && 'props' in data) {
      // Normalize the data into IComponentData structure
      return {
        type: data.type,
        id: data.id,
        friendlyName: data.friendlyName,
        order: data.order,
        children: data.children,
        props: data.props
      }
    }
  }
  // Throw an error if the Component data cannot be normalized
  throw new Error('Component Data cannot be normalized into IComponentData');
}