import { getComponentConfig } from '../../main'

/**
 * Gets the list of components from the client app and returns a specific config for the requested type
 * @param type string that refers to the component type
 * @returns the config for the type of component
 */
export const DynamicComponent = (type: string) => {
  //TODO should always return a config or an error
  const staticComponentConfig = getComponentConfig()
  if (!staticComponentConfig[type]) return null
  return staticComponentConfig[type]
}
