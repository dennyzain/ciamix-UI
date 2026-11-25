import { useId, useState } from 'react'
import {
  Autocomplete,
  Button,
  Checkbox,
  CheckboxGroup,
  Combobox,
  Field,
  Fieldset,
  Form,
  Input,
  NumberField,
  OTPField,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Switch,
  Toggle,
  ToggleGroup,
} from '@ciamix/ui'
import type { Demo } from './types.ts'

const fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Orange']

const apples = [
  { label: 'Gala', value: 'gala' },
  { label: 'Fuji', value: 'fuji' },
  { label: 'Honeycrisp', value: 'honeycrisp' },
]

function SelectDemo() {
  // Typed state checks that Select keeps its generic value type through @ciamix/ui.
  const [apple, setApple] = useState<string | null>(null)
  return (
    <>
      <Select.Root items={apples} value={apple} onValueChange={(value) => setApple(value)}>
        <Select.Label>Apple</Select.Label>
        <Select.Trigger>
          <Select.Value placeholder="Select apple" />
          <Select.Icon>▾</Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner sideOffset={4}>
            <Select.Popup>
              <Select.List>
                {apples.map(({ label, value }) => (
                  <Select.Item key={value} value={value}>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                    <Select.ItemText>{label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
      <p>Selected: {apple ?? 'none'}</p>
    </>
  )
}

function ComboboxDemo() {
  const id = useId()
  return (
    <Combobox.Root items={fruits}>
      <label htmlFor={id}>Choose a fruit</label>
      <Combobox.InputGroup>
        <Combobox.Input id={id} placeholder="e.g. Apple" />
        <Combobox.Clear aria-label="Clear selection">×</Combobox.Clear>
        <Combobox.Trigger aria-label="Open popup">▾</Combobox.Trigger>
      </Combobox.InputGroup>
      <Combobox.Portal>
        <Combobox.Positioner sideOffset={4}>
          <Combobox.Popup>
            <Combobox.Empty>No fruits found.</Combobox.Empty>
            <Combobox.List>
              {(item: string) => (
                <Combobox.Item key={item} value={item}>
                  <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                  {item}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  )
}

function AutocompleteDemo() {
  return (
    <Autocomplete.Root items={fruits}>
      <label>
        Search fruits <Autocomplete.Input placeholder="e.g. Mango" />
      </label>
      <Autocomplete.Portal>
        <Autocomplete.Positioner sideOffset={4}>
          <Autocomplete.Popup>
            <Autocomplete.Empty>No fruits found.</Autocomplete.Empty>
            <Autocomplete.List>
              {(item: string) => (
                <Autocomplete.Item key={item} value={item}>
                  {item}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Popup>
        </Autocomplete.Positioner>
      </Autocomplete.Portal>
    </Autocomplete.Root>
  )
}

function CheckboxGroupDemo() {
  const id = useId()
  return (
    <CheckboxGroup aria-labelledby={id} defaultValue={['fuji']}>
      <div id={id}>Apples</div>
      {apples.map(({ label, value }) => (
        <label key={value}>
          <Checkbox.Root name="apple" value={value}>
            <Checkbox.Indicator />
          </Checkbox.Root>
          {label}
        </label>
      ))}
    </CheckboxGroup>
  )
}

function RadioGroupDemo() {
  const id = useId()
  return (
    <RadioGroup aria-labelledby={id} defaultValue="fuji">
      <div id={id}>Best apple</div>
      {apples.map(({ label, value }) => (
        <label key={value}>
          <Radio.Root value={value}>
            <Radio.Indicator />
          </Radio.Root>
          {label}
        </label>
      ))}
    </RadioGroup>
  )
}

function OTPFieldDemo() {
  const id = useId()
  return (
    <>
      <label htmlFor={id}>Verification code</label>
      <OTPField.Root id={id} length={6}>
        {Array.from({ length: 6 }, (_, index) => (
          <OTPField.Input
            key={index}
            aria-label={index === 0 ? undefined : `Character ${index + 1} of 6`}
          />
        ))}
      </OTPField.Root>
    </>
  )
}

export const formDemos: Demo[] = [
  {
    name: 'Button',
    render: () => (
      <div className="demo-actions">
        <Button>Default</Button>
        <Button variant="default">Primary</Button>
        <Button variant="raised">Raised</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Remove</Button>
        <Button disabled>Disabled</Button>
      </div>
    ),
  },
  {
    name: 'Input',
    render: () => (
      <label>
        Plain input <Input placeholder="Type something" />
      </label>
    ),
  },
  {
    name: 'Field + Form',
    render: () => (
      // Form handles validation itself, so Field.Error shows instead of the browser popup.
      <Form onSubmit={(event) => event.preventDefault()}>
        <Field.Root name="name">
          <Field.Label>Name</Field.Label>
          <Field.Control required placeholder="Required" />
          <Field.Description>Shown on your profile</Field.Description>
          <Field.Error match="valueMissing">Please enter your name</Field.Error>
        </Field.Root>
        <Button variant="default" type="submit">Submit</Button>
      </Form>
    ),
  },
  {
    name: 'Fieldset',
    render: () => (
      <Fieldset.Root>
        <Fieldset.Legend>Billing details</Fieldset.Legend>
        <Field.Root>
          <Field.Label>Company</Field.Label>
          <Field.Control placeholder="Enter company name" />
        </Field.Root>
      </Fieldset.Root>
    ),
  },
  {
    name: 'Checkbox',
    render: () => (
      <label>
        <Checkbox.Root defaultChecked>
          <Checkbox.Indicator />
        </Checkbox.Root>
        Enable notifications
      </label>
    ),
  },
  { name: 'Checkbox Group', render: () => <CheckboxGroupDemo /> },
  { name: 'Radio Group', render: () => <RadioGroupDemo /> },
  {
    name: 'Switch',
    render: () => (
      <label>
        <Switch.Root defaultChecked>
          <Switch.Thumb />
        </Switch.Root>
        Notifications
      </label>
    ),
  },
  {
    name: 'Slider',
    render: () => (
      <Slider.Root defaultValue={25}>
        <Slider.Label>Volume</Slider.Label>
        <Slider.Value />
        <Slider.Control>
          <Slider.Track>
            <Slider.Indicator />
            <Slider.Thumb aria-label="Volume" />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
    ),
  },
  {
    name: 'Number Field',
    render: () => (
      <NumberField.Root defaultValue={5}>
        <NumberField.ScrubArea>
          <label>Amount</label>
          <NumberField.ScrubAreaCursor />
        </NumberField.ScrubArea>
        <NumberField.Group>
          <NumberField.Decrement>−</NumberField.Decrement>
          <NumberField.Input />
          <NumberField.Increment>+</NumberField.Increment>
        </NumberField.Group>
      </NumberField.Root>
    ),
  },
  { name: 'OTP Field', render: () => <OTPFieldDemo /> },
  { name: 'Select', render: () => <SelectDemo /> },
  { name: 'Combobox', render: () => <ComboboxDemo /> },
  { name: 'Autocomplete', render: () => <AutocompleteDemo /> },
  {
    name: 'Toggle',
    render: () => (
      <Toggle aria-label="Favorite" defaultPressed>
        ★ Favorite
      </Toggle>
    ),
  },
  {
    name: 'Toggle Group',
    render: () => (
      <ToggleGroup aria-label="Text alignment" defaultValue={['left']}>
        <Toggle value="left">Left</Toggle>
        <Toggle value="center">Center</Toggle>
        <Toggle value="right">Right</Toggle>
      </ToggleGroup>
    ),
  },
]
