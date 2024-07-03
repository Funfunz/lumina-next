import staticComponentsPath from "@/staticComponentsPath"

export const LuminaDynamicComponent = (type: string) => {
  if (!staticComponentsPath[type]) return null
  return staticComponentsPath[type]
}
