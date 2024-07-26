
import { ContextProvider } from "./context/contextProvider"
import { Editor } from "./components/editor/editor"
import { Render } from "./components/render/render"
import type { IData, IPageData } from "./models/data";
import { useEffect, useState } from "react";
import { TConfig } from "./models/editor-buttonModel";

export type TComponentConfig = {
  [key: string]: {
    component: (data: any) => React.JSX.Element | null;
    config: TConfig;
  }
}

type TProps = {
  selectedPage: string
  getData: () => Promise<IData>
  components: TComponentConfig
};

const defaultValues: TProps = {
  selectedPage: 'home',
  getData: async () => ({}),
  components: {}
}

let componentConfig: TComponentConfig = {}

export function getComponentConfig() {
  return componentConfig
}

function setComponentConfig(newComponentConfig: TComponentConfig) {
  componentConfig = newComponentConfig
  return componentConfig
}

export default function Lumina({ selectedPage, getData, components }: TProps = defaultValues) {
  const [builderData, setBuilderData] = useState<IData>({})
  useEffect(
    () => {
      async function fetchData() {
        setBuilderData(await getData())
      }
      fetchData();

    },[getData]
  )

  useEffect(
    () => {
      if (components) setComponentConfig(components)
    },[components]
  )

  if (!builderData[selectedPage]) return null
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

export { EditorButton } from './components/editor-button/editor-button'
export type { TConfig } from './models/editor-buttonModel'

export type { IData, IPageData }