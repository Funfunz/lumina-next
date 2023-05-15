import staticComponentsPath from "@/staticComponentsPath"
import data from '@/data/data.json'
import { IComponentData, IData } from "@/data/data"
import styles from '@/app/page.module.css'

async function getData(pageName: string) {
  return (data as IData)[pageName || 'home']
}

const DynamicComponent = (type: string) => {
  if (!staticComponentsPath[type]) return null
  return staticComponentsPath[type]
}

type Props = {
  params: {
    slug: string
  }
}

const renderData = (data: IComponentData[]) => {
  return data.map(
    (component) => {
      const LoadedComponent = DynamicComponent(component.type)
      if (!LoadedComponent) return null
      return <LoadedComponent {...component.props} id={component.id}>{renderData(component.children || [])}</LoadedComponent>
    }
  )
}

export default async function Editor({params}: Props) {
  const data = await getData(params.slug)
  return (
    <>
      {renderData(data.children)}
    </>
  )
}
