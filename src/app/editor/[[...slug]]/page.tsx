import staticComponentsPath from "@/staticComponentsPath"
import data from '@/data/data.json'
import { IComponentData, IData } from "@/data/data"
import { Editor } from "@/components/editor/editor"

async function getData(pageName: string) {
  return (data as IData)[pageName]
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
      return <LoadedComponent {...component.props}>{renderData(component.children || [])}</LoadedComponent>
    }
  )
}

export default async function EditorPage({params}: Props) {
  const data = await getData(params.slug)
  return (
    <Editor data={data}>
      {renderData(data.children)}
    </Editor>
  )
}
