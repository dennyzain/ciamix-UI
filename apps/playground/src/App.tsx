import { Button, Field, Input } from '@ciamix/ui'

// Unstyled preview of every Ciamix component. Their look is added later in packages/ui.
export default function App() {
  return (
    <main>
      <h1>Ciamix UI Playground</h1>

      <section>
        <h2>Button</h2>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
      </section>

      <section>
        <h2>Input</h2>
        <label>
          Plain input <Input placeholder="Type something" />
        </label>
      </section>

      <section>
        <h2>Field</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input required placeholder="Required" />
            <Field.Description>Shown on your profile</Field.Description>
            <Field.Error match="valueMissing">Please enter your name</Field.Error>
          </Field.Root>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </main>
  )
}
