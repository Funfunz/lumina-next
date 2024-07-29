import { getComponentConfig } from "@/main"

export const DynamicComponent = (type: string) => {
  const staticComponentConfig = getComponentConfig()
  console.log(staticComponentConfig)
  if (!staticComponentConfig[type]) return null
  return staticComponentConfig[type]
}
