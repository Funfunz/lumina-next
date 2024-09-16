import { useAppContext } from '@lumina/core'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const pageConfigurations: {
  [key: string]: (params: Record<string, string>) => Array<{ path?: string; name: string }>
} = {
  ['/product/:productId']: params => {
    return [{ path: '/', name: 'Home' }, { name: 'product / ' + params.productId }]
  },
}

export const Breadcrumb = () => {
  const { params, selectedPage } = useAppContext()
  console.log({ selectedPage })
  const breadcrumbConfigFunction = pageConfigurations[selectedPage]
  if (!breadcrumbConfigFunction) {
    return null
  }
  const computedPathComponents = breadcrumbConfigFunction(params)
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      {computedPathComponents.map((component, index) => {
        if (!component.path) {
          return (
            <Typography key={index} sx={{ color: 'text.primary' }}>
              {component.name}
            </Typography>
          )
        }
        return (
          <Link key={index} underline='hover' color='inherit' href={`${component.path}`}>
            {component.name}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}
