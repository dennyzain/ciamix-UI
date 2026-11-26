import { catalogUrl, docsUrl, homeUrl, repositoryUrl } from '../site-links.ts'
import { ComponentShowcase } from './ComponentShowcase.tsx'

const categories = [
  { id: 'form-controls', name: 'Form controls', description: 'Buttons, inputs, switches, and controls for collecting and validating information.' },
  { id: 'overlays', name: 'Overlays', description: 'Dialogs, drawers, menus, and tooltips that keep extra context within reach.' },
  { id: 'display', name: 'Display', description: 'Tabs, accordions, avatars, and progress indicators for organizing content.' },
]

function Brand() {
  return (
    <a className="landing-brand" href={homeUrl}>
      <span className="landing-mark" aria-hidden="true">C</span>
      <span>Ciamix UI</span>
    </a>
  )
}

export function Landing() {
  return (
    <div className="landing">
      <a className="landing-skip" href="#main-content">Skip to content</a>
      <header className="landing-header">
        <div className="landing-width landing-header-inner">
          <Brand />
          <nav aria-label="Main navigation">
            <a href={catalogUrl}>Components</a>
            <a href={docsUrl}>Docs</a>
            <a href={repositoryUrl}>GitHub</a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="landing-width">
        <section className="landing-hero" aria-labelledby="landing-title">
          <h1 id="landing-title">Build a UI that<br /> feels like yours.</h1>
          <div className="landing-intro">
            <p>Accessible React components built on Base UI, with a shared theme and interactive examples.</p>
            <div className="landing-actions">
              <a className="landing-action landing-action-primary" href={catalogUrl}>Browse components</a>
              <a className="landing-action landing-action-secondary" href={docsUrl}>Read the docs</a>
            </div>
          </div>
        </section>

        <ComponentShowcase />

        <section className="landing-library" aria-labelledby="landing-library-title">
          <div className="landing-section-heading">
            <h2 id="landing-library-title">Explore the library</h2>
            <a href={catalogUrl}>View all 38 components</a>
          </div>
          <div className="landing-categories">
            {categories.map((item) => (
              <a key={item.id} className="landing-category" href={`${catalogUrl}#${item.id}`}>
                <span className={`landing-category-mark landing-category-mark--${item.id}`} aria-hidden="true">
                  <i /><i /><i />
                </span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="landing-setup" aria-labelledby="landing-setup-title">
          <div>
            <h2 id="landing-setup-title">Make the theme yours.</h2>
            <p>Start with the workspace setup, then change colors, typography, and radii through CSS variables.</p>
          </div>
          <a className="landing-action landing-action-secondary" href={docsUrl}>Getting started</a>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-width landing-footer-inner">
          <Brand />
          <a href={repositoryUrl}>View source on GitHub</a>
        </div>
      </footer>
    </div>
  )
}
