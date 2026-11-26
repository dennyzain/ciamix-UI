import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@ciamix/ui/global.css'
import '@ciamix/ui/styles.css'
import './landing.css'
import { componentDocs } from '../docs/component-docs.ts'
import { catalogUrl, componentAnchor } from '../site-links.ts'
import { Landing } from './Landing.tsx'

const bookmark = window.location.hash.slice(1)
const isCatalogBookmark = bookmark === 'docs' || bookmark === 'top' ||
  Object.keys(componentDocs).some((name) => componentAnchor(name) === bookmark)

if (isCatalogBookmark) {
  window.location.replace(`${catalogUrl}${window.location.search}${window.location.hash}`)
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Landing />
    </StrictMode>,
  )
}
