import { TConfig } from "@/models/showEditModel";

export const config: TConfig = {
  name: "Title text",
  props: [
    {
      type: 'string',
      name: 'title',
      label: 'Title'
    },
    {
      type: 'string',
      name: 'text',
      label: 'Text'
    },
  ],
  editor: {
    children: false,
    editable: true,
    delete: true
  }
}
