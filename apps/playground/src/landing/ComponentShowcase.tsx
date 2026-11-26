import { useState } from 'react'
import { Button, Dialog, Input, Switch, Tabs } from '@ciamix/ui'
import { getExampleCode } from '../docs/component-docs.ts'
import { catalogUrl, componentAnchor } from '../site-links.ts'

function ButtonPreview() {
  const [saved, setSaved] = useState(false)

  return (
    <>
      <Button variant="default" onClick={() => setSaved(true)}>Save changes</Button>
      <span className="showcase-confirmation" role="status">{saved && 'Changes saved'}</span>
    </>
  )
}

function InputPreview() {
  return (
    <label className="showcase-field">
      Project name
      <Input name="project" placeholder="New project" />
    </label>
  )
}

function SwitchPreview() {
  return (
    <label className="showcase-switch">
      <Switch.Root defaultChecked><Switch.Thumb /></Switch.Root>
      Notifications
    </label>
  )
}

function DialogPreview() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>View details</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Viewport>
          <Dialog.Popup>
            <Dialog.Title>Project details</Dialog.Title>
            <Dialog.Description>Shared with your team.</Dialog.Description>
            <Dialog.Close>Done</Dialog.Close>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const featured = [
  { name: 'Button', title: 'Project settings', description: 'Save changes to your workspace.', Preview: ButtonPreview },
  { name: 'Input', title: 'Name your project', description: 'Give your workspace a name people will recognize.', Preview: InputPreview },
  { name: 'Switch', title: 'Notification settings', description: 'Choose whether to receive project updates.', Preview: SwitchPreview },
  { name: 'Dialog', title: 'Project information', description: 'Open a dialog to see more details.', Preview: DialogPreview },
] as const

function ExampleCode({ code }: { code: string }) {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const [importLine, , ...lines] = code.split('\n')

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('failed')
    }
  }

  return (
    <div className="showcase-source">
      <div className="showcase-source-header">
        <span>Example code</span>
        <Button size="sm" onClick={copy}>{copyStatus === 'copied' ? 'Copied' : 'Copy code'}</Button>
      </div>
      <pre tabIndex={0} aria-label="JSX example"><code>
        <span className="showcase-code-import">{importLine}</span>
        {'\n\n'}{lines.join('\n')}
      </code></pre>
      <span className="showcase-copy-feedback" role="status">
        {copyStatus === 'copied' && 'Example copied.'}
        {copyStatus === 'failed' && 'Clipboard unavailable. Select the example to copy it.'}
      </span>
    </div>
  )
}

export function ComponentShowcase() {
  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <Tabs.Root defaultValue="Button" className="showcase-window">
        <div className="showcase-header">
          <h2 id="showcase-title">Try the components</h2>
          <Tabs.List aria-label="Featured components" className="showcase-tabs" activateOnFocus>
            {featured.map(({ name }) => <Tabs.Tab key={name} value={name}>{name}</Tabs.Tab>)}
          </Tabs.List>
        </div>
        {featured.map(({ name, title, description, Preview }) => (
          <Tabs.Panel key={name} value={name} className="showcase-panel">
            <div className="showcase-stage">
              <div className="showcase-preview">
                <span className="showcase-sample-mark" aria-hidden="true">
                  <i /><i /><i /><i />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="showcase-preview-action"><Preview /></div>
              </div>
            </div>
            <ExampleCode code={getExampleCode(name)} />
            <a className="showcase-doc-link" href={`${catalogUrl}#${componentAnchor(name)}`}>See the {name} docs</a>
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </section>
  )
}
