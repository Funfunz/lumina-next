
import { getFullData } from "@/lib/dataFetcher";
import { ContextProvider } from "@/context/contextProvider";
import { Editor } from "@/components/editor/editor";
import { Render } from "@/components/render/render";

type Props = {
  params: {
    slug: string;
  };
};

export default async function EditorPage({ params }: Props) {
  const selectedPage = params.slug || "home";
  const builderData = await getFullData();
  if (!builderData[selectedPage]) return;
  return (
    <ContextProvider
      data={{
        appContext: { editor: true },
        builderDataContext: {
          builderData,
          selectedPage,
          pages: Object.keys(builderData),
        },
      }}
    >
      <Editor>
        <Render/>
      </Editor>
    </ContextProvider>
  );
}
