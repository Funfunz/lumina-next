import { getData, getPages } from "@/lib/dataFetcher"
import { Render } from "@/components/render/render"

type Props = {
  params: {
    slug: string
  }
}

export default async function EditorPage({params}: Props) {
  console.log({params})
  const data = await getData(params.slug)
  const pages = await getPages()
  if (!data) return <></>
  return (
    <>
      <Render/>
    </>
  )
}
