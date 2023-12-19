import { Editor } from "@/components/editor/editor"
import { getFullData } from "@/lib/dataFetcher"
import { Render } from "@/components/render/render"
import { ContextProvider } from '@/context/contextProvider'

type Props = {
  params: {
    slug: string
  }
}

export default async function EditorPage({params}: Props) {
  const selectedPage = params.slug || 'home'
  const builderData = await getFullData()
  if (!builderData[selectedPage]) return
  return (
    <ContextProvider data={{appContext: {editor: true}, builderDataContext: {builderData, selectedPage, pages: Object.keys(builderData)}}}>
      <Editor>
        <Render/>
      </Editor>
    </ContextProvider>
  )
}
