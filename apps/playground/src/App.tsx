import { useLayoutEffect } from 'react'
import { displayDemos } from './demos/display-demos.tsx'
import { formDemos } from './demos/form-demos.tsx'
import { overlayDemos } from './demos/overlay-demos.tsx'
import { DemoUsage, GettingStarted } from './docs/Documentation.tsx'
import { componentAnchor, homeUrl } from './site-links.ts'

const groups = [
  { id: 'form-controls', title: 'Form controls', demos: formDemos },
  { id: 'overlays', title: 'Overlays', demos: overlayDemos },
  { id: 'display', title: 'Display', demos: displayDemos },
]

export default function App() {
  useLayoutEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <div className="catalog">
      <aside className="catalog-sidebar">
        <a className="catalog-brand" href={homeUrl}>Ciamix UI</a>
        <nav aria-label="Playground navigation">
          <div className="catalog-nav-group catalog-doc-link">
            <a href="#docs">Getting started</a>
          </div>
          {groups.map((group) => (
            <div key={group.title} className="catalog-nav-group">
              <p>{group.title}</p>
              <ul>
                {group.demos.map((demo) => (
                  <li key={demo.name}>
                    <a href={`#${componentAnchor(demo.name)}`}>{demo.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main className="catalog-main" id="top">
        <h1>Component playground</h1>
        {groups.map((group) => (
          <div className="catalog-group" id={group.id} key={group.id}>
            <h2>{group.title}</h2>
            <div className="catalog-grid">
              {group.demos.map((demo) => (
                <section className="catalog-demo" key={demo.name} id={componentAnchor(demo.name)}>
                  <h3>{demo.name}</h3>
                  <div className="catalog-example">{demo.render()}</div>
                  <DemoUsage name={demo.name} />
                </section>
              ))}
            </div>
          </div>
        ))}
        <GettingStarted />
      </main>
    </div>
  )
}
