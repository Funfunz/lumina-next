import { getFullData } from "@/lib/dataFetcher"
import { Render } from "@/components/render/render"
import { ContextProvider } from '@/context/contextProvider'
import { TLuminaOptions } from "@/types/common"

type TLuminaAppProps = {
  params: {
    slug: string
    options: TLuminaOptions
  }
}

export default async function LuminaApp({ params }: TLuminaAppProps) {
  const selectedPage = params.slug || 'home'
  const builderData = await getFullData()
  if (!builderData[selectedPage]) return

  return (
    <ContextProvider data={{ builderDataContext: { builderData, selectedPage, pages: Object.keys(builderData) } }}>
      <Render />
    </ContextProvider>
  )
}
