import { renderData } from "@/components/componentRenderer/componentRenderer"
import { getData } from "@/lib/dataFetcher"

type Props = {
  params: {
    slug: string
  }
}

export default async function Editor({params}: Props) {
  const data = await getData(params.slug)
  return (
    <>
      {renderData(data.children)}
    </>
  )
}
