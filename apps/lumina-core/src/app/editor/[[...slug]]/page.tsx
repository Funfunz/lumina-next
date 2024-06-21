import { Editor } from "@/components/editor/editor";
import { getFullData } from "@/lib/dataFetcher";
import { Render } from "@/components/render/render";
import { ContextProvider } from "@/context/contextProvider";
import { TLuminaOptions } from "@/types/common"

type TEditorPageProps = {
  params: {
    slug: string;
    options: TLuminaOptions;
  };
};

export default async function EditorPage({ params }: TEditorPageProps) {
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
        <Render />
      </Editor>
    </ContextProvider>
  );
}
