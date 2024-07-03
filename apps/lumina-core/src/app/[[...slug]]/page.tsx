import { getFullData } from "@/lib/dataFetcher"
import { LuminaRender } from "@/components/lumina-render/lumina-render"
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
    <ContextProvider data={{builderDataContext: {builderData, selectedPage, pages: Object.keys(builderData)}}}>
      <LuminaRender/>
    </ContextProvider>
  )
}
