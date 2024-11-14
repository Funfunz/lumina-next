export const mapTreeElementIcon = (type: string): string => {
  switch (type) {
    case 'title':
      return 'lum-icon-title'
    case 'button':
      return 'lum-icon-button'
    case 'image':
      return 'lum-icon-picture'
    case 'video':
      return 'lum-icon-video'
    case 'text':
      return 'lum-icon-align-left'
    case 'container':
      return 'lum-icon-component'
    case 'link':
      return 'lum-icon-link'
    case 'grid':
      return 'lum-icon-grid'
    default:
      return 'lum-icon-object-group'
  }
}
