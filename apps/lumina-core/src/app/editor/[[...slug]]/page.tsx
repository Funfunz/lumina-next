import { LuminaEditor } from "@/components/lumina-editor/lumina-editor";
import { getFullData } from "@/lib/dataFetcher";
import { LuminaRender } from "@/components/lumina-render/lumina-render";
import { ContextProvider } from "@/context/contextProvider";
import componentsConfigs from "@/data/components.json"
import { IComponentsConfig } from "@/data/data";

type Props = {
  params: {
    slug: string;
  };
};

export default async function EditorPage({ params }: Props) {
  const selectedPage = params.slug || "home"
  const builderData = await getFullData()
  const componentsConfig = componentsConfigs as IComponentsConfig

  //TODO logic is needed to avoid dependency on data to load the editor
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
        componentsConfig
      }}
    >
      <LuminaEditor>
        <LuminaRender />
      </LuminaEditor>
    </ContextProvider>
  );
}
