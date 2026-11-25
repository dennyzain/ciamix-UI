import { displayDemos } from './demos/display-demos.tsx'
import { formDemos } from './demos/form-demos.tsx'
import { overlayDemos } from './demos/overlay-demos.tsx'

const groups = [
  { title: 'Form controls', demos: formDemos },
  { title: 'Overlays', demos: overlayDemos },
  { title: 'Display', demos: displayDemos },
]

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export default function App() {
  return (
    <div className="catalog">
      <aside className="catalog-sidebar">
        <a className="catalog-brand" href="#top">Ciamix UI</a>
        <nav aria-label="Components">
          {groups.map((group) => (
            <div key={group.title} className="catalog-nav-group">
              <p>{group.title}</p>
              <ul>
                {group.demos.map((demo) => (
                  <li key={demo.name}>
                    <a href={`#${slug(demo.name)}`}>{demo.name}</a>
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
          <div className="catalog-group" key={group.title}>
            <h2>{group.title}</h2>
            <div className="catalog-grid">
              {group.demos.map((demo) => (
                <section className="catalog-demo" key={demo.name} id={slug(demo.name)}>
                  <h3>{demo.name}</h3>
                  <div className="catalog-example">{demo.render()}</div>
                </section>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
