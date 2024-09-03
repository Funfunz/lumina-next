import type { TConfig } from '@lumina/core'

export const config: TConfig = {
  name: 'Button',
  type: 'button',
  props: [
    {
      type: 'singleSelect',
      name: 'variant',
      label: 'Variant',
      arrayValues: ['contained', 'outlined', 'text'],
    },
    {
      type: 'singleSelect',
      name: 'color',
      label: 'Color',
      arrayValues: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    {
      type: 'boolean',
      name: 'disabled',
      label: 'Disabled',
    },
    {
      type: 'boolean',
      name: 'disableElevation',
      label: 'Disable Elevation',
    },
    {
      type: 'boolean',
      name: 'Disable Focus Ripple',
      label: 'Disabled',
    },
    {
      type: 'boolean',
      name: 'disableRipple',
      label: 'Disable Ripple',
    },
    {
      type: 'boolean',
      name: 'fullWidth',
      label: 'Full Width',
    },
    {
      type: 'string',
      name: 'text',
      label: 'Text',
    },
    {
      type: 'string',
      name: 'href',
      label: 'Fref',
    },
    {
      type: 'singleSelect',
      name: 'size',
      label: 'Size',
      arrayValues: ['small', 'medium', 'large'],
    },
  ],
  editor: {
    children: true,
    editable: true,
    delete: true,
  },
}
