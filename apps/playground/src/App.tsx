import { displayDemos } from './demos/display-demos.tsx'
import { formDemos } from './demos/form-demos.tsx'
import { overlayDemos } from './demos/overlay-demos.tsx'

// Unstyled preview of every Ciamix component. Their look is added later in packages/ui.
const groups = [
  { title: 'Form controls', demos: formDemos },
  { title: 'Overlays', demos: overlayDemos },
  { title: 'Display', demos: displayDemos },
]

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export default function App() {
  return (
    <main>
      <h1>Ciamix UI Playground</h1>

      <nav aria-label="Components">
        {groups.map((group) => (
          <p key={group.title}>
            <strong>{group.title}:</strong>{' '}
            {group.demos.map((demo, i) => (
              <span key={demo.name}>
                {i > 0 && ' · '}
                <a href={`#${slug(demo.name)}`}>{demo.name}</a>
              </span>
            ))}
          </p>
        ))}
      </nav>

      {groups.map((group) => (
        <div key={group.title}>
          <h2>{group.title}</h2>
          {group.demos.map((demo) => (
            <section key={demo.name} id={slug(demo.name)}>
              <h3>{demo.name}</h3>
              {demo.render()}
            </section>
          ))}
        </div>
      ))}
    </main>
  )
}
