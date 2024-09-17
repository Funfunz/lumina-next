import { FC, useEffect } from 'react'
import mermaid, { type MermaidConfig } from 'mermaid'

const DEFAULT_CONFIG: MermaidConfig = {
  startOnLoad: true,
  theme: 'base',
}

export interface MermaidProps {
  name?: any
  children: React.ReactNode
}

export const Mermaid: FC<MermaidProps> = ({ children }) => {
  mermaid.initialize(DEFAULT_CONFIG)

  useEffect(() => {
    mermaid.contentLoaded()
  }, [children])

  return (
    <div className='mermaid' style={{ textAlign: 'center' }}>
      {children}
    </div>
  )
}
