/* eslint-disable no-unused-vars */
import { ContextProvider } from './context/contextProvider'
import { Editor } from './components/editor'
import { Render } from './components/render'
import type { IData } from './models/data'
import { useEffect, useState } from 'react'
import type { TConfig } from './models/editor-buttonModel'
import { ToggleModalContextProvider } from './context/handleModalsContext'
import { EditorModal } from './components/modals'
import { FormThemeProvider } from 'react-form-component'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

export type TComponentConfig = {
  [key: string]: {
    component: (data: any) => React.JSX.Element | null
    config: TConfig
  }
}

type TProps = {
  selectedPage: string
  getData: () => Promise<IData>
  components: TComponentConfig
}

const defaultValues: TProps = {
  selectedPage: 'home',
  getData: async () => ({}),
  components: {},
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

  // Get the current path
  const location = useLocation()

  // Determine if the editor should be true based on the current path
  const isEditorRoute = location.pathname.includes('/editor')

  useEffect(() => {
    async function fetchData() {
      setBuilderData(await getData())
    }
    fetchData()
  }, [getData])

  useEffect(() => {
    if (components) setComponentConfig(components)
  }, [components])

  if (!builderData[selectedPage]) return null

  return (
    <ContextProvider
      data={{
        appContext: { editor: isEditorRoute }, // Set editor based on the route
        builderDataContext: {
          builderData,
          selectedPage,
          pages: Object.keys(builderData),
        },
      }}
    >
      <FormThemeProvider theme={{ colors: { success: 'none' } }}>
        <ToggleModalContextProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Render />} />
              <Route
                path='/editor'
                element={
                  <Editor>
                    <EditorModal />
                    <Render />
                  </Editor>
                }
              />
            </Routes>
          </BrowserRouter>
        </ToggleModalContextProvider>
      </FormThemeProvider>
    </ContextProvider>
  )
}

export { EditorButtonsContainer } from './components/editor-buttons-container'
export type { TConfig } from './models/editor-buttonModel'
export type { IData }
