import type { ReactNode } from 'react'
import type { DocumentedDemo } from '../docs/component-docs.ts'

export interface Demo {
  name: DocumentedDemo
  render: () => ReactNode
}
