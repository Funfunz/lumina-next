import { Editor } from "@/components/editor/editor"
import { getData, getPages } from "@/lib/dataFetcher"
import { Render } from "@/components/render/render"
import { ContextProvider } from '@/context/contextProvider'

type Props = {
  params: {
    slug: string
  }
}

export default async function EditorPage({params}: Props) {
  const selectedPage = params.slug || 'home'
  const pageData = await getData(selectedPage)
  const pages = await getPages()
  if (!pageData) return
  return (
    <ContextProvider data={{appContext: {editor: true}, builderDataContext: {builderData: {[selectedPage]: pageData}, selectedPage, pages}}}>
      <Editor>
        <Render/>
      </Editor>
    </ContextProvider>
  )
}
