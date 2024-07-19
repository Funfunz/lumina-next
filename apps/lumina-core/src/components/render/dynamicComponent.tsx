import staticComponentsPath from "@/staticComponentsPath"

export const DynamicComponent = (type: string) => {
  if (!staticComponentsPath[type]) return null
  return staticComponentsPath[type]
}
