import { getComponentDoc, getExampleCode, type DocumentedDemo } from './component-docs.ts'

const setup = `import '@ciamix/ui/global.css'
import '@ciamix/ui/styles.css'`

const theme = `:root {
  --ci-accent: #1067ff;
  --ci-size-base: 0.875rem;
}`

function CodeSample({ code, label }: { code: string; label: string }) {
  return <pre aria-label={label} tabIndex={0}><code>{code}</code></pre>
}

export function GettingStarted() {
  return (
    <article className="catalog-group catalog-docs" id="docs">
      <h2>Getting started</h2>
      <p>Import both stylesheets once at the root of a React web app in this workspace.</p>
      <CodeSample code={setup} label="Stylesheet imports" />
      <p>
        Import components from <code>@ciamix/ui</code>. Open <strong>Usage</strong> below a
        preview for its JSX and API reference.
      </p>

      <h3>Customize the theme</h3>
      <p>Override the CSS variables after importing the stylesheets.</p>
      <CodeSample code={theme} label="Theme override example" />
      <p>
        Put <code>data-ciamix-theme=&quot;dark&quot;</code> on the document root so menus and dialogs
        use the same theme when they render in a portal.
      </p>

      <h3>Typography</h3>
      <p>
        Lora 500 is used for catalog headings. Components use Geist, with 14 px for controls,
        13 px for compact text, and 16 px for text inputs on narrow screens.
      </p>
    </article>
  )
}

const referenceSlug = (name: string) => name
  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
  .replace(/([a-z\d])([A-Z])/g, '$1-$2')
  .toLowerCase()

export function DemoUsage({ name }: { name: DocumentedDemo }) {
  const doc = getComponentDoc(name)
  const refs = doc.references ?? doc.imports.slice(0, 1)

  return (
    <details className="catalog-usage">
      <summary aria-label={`Usage for ${name}`}>Usage</summary>
      <div className="catalog-usage-body">
        <p>{doc.description}</p>
        <CodeSample
          code={getExampleCode(name)}
          label={`${name} example code`}
        />
        <div className="catalog-api-links">
          {refs.map((reference) => (
            <a key={reference} href={`https://base-ui.com/react/components/${referenceSlug(reference)}`}>
              {refs.length === 1 ? 'Base UI API' : `${reference} API`}
            </a>
          ))}
        </div>
      </div>
    </details>
  )
}
