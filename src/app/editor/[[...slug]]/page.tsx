import { Editor } from "@/components/editor/editor"
import { getData } from "@/lib/dataFetcher"
import { renderData } from "@/components/componentRenderer/componentRenderer"

type Props = {
  params: {
    slug: string
  }
}

export default async function EditorPage({params}: Props) {
  const data = await getData(params.slug)
  return (
    <Editor data={data}>
      {renderData(data.children)}
    </Editor>
  )
}
