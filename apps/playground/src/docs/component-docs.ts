type ComponentName = keyof typeof import('@ciamix/ui')

interface ComponentDoc {
  imports: readonly ComponentName[]
  description: string
  example: string
  references?: readonly ComponentName[]
}

export const componentDocs = {
  Button: {
    imports: ['Button'],
    description: 'Use the default variant for a primary action. The control variant is neutral.',
    example: '<Button variant="default">Save changes</Button>',
  },
  Input: {
    imports: ['Input'],
    description: 'Give every input a visible label. Use Field when it also needs help or validation text.',
    example: `<label>
  Project name
  <Input name="project" placeholder="New project" />
</label>`,
  },
  'Field + Form': {
    imports: ['Field', 'Form', 'Button'],
    references: ['Field', 'Form'],
    description: 'Form coordinates validation. Field associates the control with its label, description, and error.',
    example: `<Form onSubmit={(event) => event.preventDefault()}>
  <Field.Root name="email">
    <Field.Label>Email</Field.Label>
    <Field.Control type="email" required />
    <Field.Error match="valueMissing">Enter your email.</Field.Error>
    <Field.Error match="typeMismatch">Enter a valid email.</Field.Error>
  </Field.Root>
  <Button type="submit">Save</Button>
</Form>`,
  },
  Fieldset: {
    imports: ['Fieldset', 'Field'],
    description: 'Group related fields under a visible legend.',
    example: `<Fieldset.Root>
  <Fieldset.Legend>Billing</Fieldset.Legend>
  <Field.Root name="company">
    <Field.Label>Company</Field.Label>
    <Field.Control />
  </Field.Root>
</Fieldset.Root>`,
  },
  Checkbox: {
    imports: ['Checkbox'],
    description: 'Use a checkbox for an independent choice. The indicator follows the checked state.',
    example: `<label>
  <Checkbox.Root name="updates"><Checkbox.Indicator /></Checkbox.Root>
  Email updates
</label>`,
  },
  'Checkbox Group': {
    imports: ['CheckboxGroup', 'Checkbox'],
    description: 'Give choices distinct values and use defaultValue to select one or more initially.',
    example: `<CheckboxGroup aria-label="Delivery methods" defaultValue={['email']}>
  <label>
    <Checkbox.Root value="email"><Checkbox.Indicator /></Checkbox.Root>
    Email
  </label>
  <label>
    <Checkbox.Root value="sms"><Checkbox.Indicator /></Checkbox.Root>
    SMS
  </label>
</CheckboxGroup>`,
  },
  'Radio Group': {
    imports: ['RadioGroup', 'Radio'],
    description: 'Radio Group manages a single selection. Use a Radio root for each option.',
    example: `<RadioGroup aria-label="Plan" defaultValue="monthly">
  <label>
    <Radio.Root value="monthly"><Radio.Indicator /></Radio.Root>
    Monthly
  </label>
  <label>
    <Radio.Root value="yearly"><Radio.Indicator /></Radio.Root>
    Yearly
  </label>
</RadioGroup>`,
  },
  Switch: {
    imports: ['Switch'],
    description: 'Use a switch for an on or off setting that takes effect immediately.',
    example: `<label>
  <Switch.Root defaultChecked><Switch.Thumb /></Switch.Root>
  Notifications
</label>`,
  },
  Slider: {
    imports: ['Slider'],
    description: 'Set the allowed range on Root and give each thumb an accessible name.',
    example: `<Slider.Root defaultValue={25} min={0} max={100}>
  <Slider.Label>Volume</Slider.Label>
  <Slider.Value />
  <Slider.Control>
    <Slider.Track>
      <Slider.Indicator />
      <Slider.Thumb aria-label="Volume" />
    </Slider.Track>
  </Slider.Control>
</Slider.Root>`,
  },
  'Number Field': {
    imports: ['NumberField'],
    description: 'Use a number field when users need to type a value or adjust it in steps.',
    example: `<NumberField.Root min={1} defaultValue={1}>
  <NumberField.Group>
    <NumberField.Decrement aria-label="Decrease quantity">−</NumberField.Decrement>
    <NumberField.Input aria-label="Quantity" />
    <NumberField.Increment aria-label="Increase quantity">+</NumberField.Increment>
  </NumberField.Group>
</NumberField.Root>`,
  },
  'OTP Field': {
    imports: ['OTPField'],
    description: 'Match the number of inputs to the length of the verification code.',
    example: `<OTPField.Root length={6} aria-label="Verification code">
  {Array.from({ length: 6 }, (_, index) => (
    <OTPField.Input key={index} aria-label={'Digit ' + (index + 1)} />
  ))}
</OTPField.Root>`,
  },
  Select: {
    imports: ['Select'],
    description: 'Use Select to choose from a fixed list. Give the trigger a visible label.',
    example: `<Select.Root defaultValue="small">
  <Select.Label>Size</Select.Label>
  <Select.Trigger><Select.Value /></Select.Trigger>
  <Select.Portal>
    <Select.Positioner sideOffset={4}>
      <Select.Popup>
        <Select.List>
          <Select.Item value="small"><Select.ItemText>Small</Select.ItemText></Select.Item>
          <Select.Item value="large"><Select.ItemText>Large</Select.ItemText></Select.Item>
        </Select.List>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>`,
  },
  Combobox: {
    imports: ['Combobox'],
    description: 'Use a combobox when users need to filter a list before selecting an item.',
    example: `<Combobox.Root items={['Apple', 'Pear']}>
  <Combobox.Input aria-label="Choose fruit" />
  <Combobox.Portal>
    <Combobox.Positioner sideOffset={4}>
      <Combobox.Popup>
        <Combobox.Empty>No matches</Combobox.Empty>
        <Combobox.List>
          {(fruit: string) => <Combobox.Item key={fruit} value={fruit}>{fruit}</Combobox.Item>}
        </Combobox.List>
      </Combobox.Popup>
    </Combobox.Positioner>
  </Combobox.Portal>
</Combobox.Root>`,
  },
  Autocomplete: {
    imports: ['Autocomplete'],
    description: 'Offer suggestions as the user types while still allowing free text.',
    example: `<Autocomplete.Root items={['Amsterdam', 'Jakarta']}>
  <Autocomplete.Input aria-label="City" />
  <Autocomplete.Portal>
    <Autocomplete.Positioner sideOffset={4}>
      <Autocomplete.Popup>
        <Autocomplete.List>
          {(city: string) => <Autocomplete.Item key={city} value={city}>{city}</Autocomplete.Item>}
        </Autocomplete.List>
      </Autocomplete.Popup>
    </Autocomplete.Positioner>
  </Autocomplete.Portal>
</Autocomplete.Root>`,
  },
  Toggle: {
    imports: ['Toggle'],
    description: 'Keep the label stable while the toggle changes its pressed state.',
    example: '<Toggle aria-label="Bold">Bold</Toggle>',
  },
  'Toggle Group': {
    imports: ['ToggleGroup', 'Toggle'],
    description: 'Give each toggle a unique value. Use multiple if several choices can be active.',
    example: `<ToggleGroup aria-label="Alignment" defaultValue={['left']}>
  <Toggle value="left">Left</Toggle>
  <Toggle value="center">Center</Toggle>
  <Toggle value="right">Right</Toggle>
</ToggleGroup>`,
  },
  Dialog: {
    imports: ['Dialog'],
    description: 'Supply a title and an explicit close action for a modal dialog.',
    example: `<Dialog.Root>
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
</Dialog.Root>`,
  },
  'Alert Dialog': {
    imports: ['AlertDialog'],
    description: 'Explain the consequence of a destructive action and provide a way to cancel.',
    example: `<AlertDialog.Root>
  <AlertDialog.Trigger>Discard draft</AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Backdrop />
    <AlertDialog.Viewport>
      <AlertDialog.Popup>
        <AlertDialog.Title>Discard this draft?</AlertDialog.Title>
        <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
        <AlertDialog.Close>Cancel</AlertDialog.Close>
        <AlertDialog.Close onClick={() => console.info('Discard confirmed')}>Discard</AlertDialog.Close>
      </AlertDialog.Popup>
    </AlertDialog.Viewport>
  </AlertDialog.Portal>
</AlertDialog.Root>`,
  },
  Drawer: {
    imports: ['Drawer'],
    description: 'Use swipeDirection to choose the dismissal direction. Always include a visible close action.',
    example: `<Drawer.Root swipeDirection="down">
  <Drawer.Trigger>Filters</Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Backdrop />
    <Drawer.Viewport>
      <Drawer.Popup>
        <Drawer.Content>
          <Drawer.Title>Filters</Drawer.Title>
          <Drawer.Close>Done</Drawer.Close>
        </Drawer.Content>
      </Drawer.Popup>
    </Drawer.Viewport>
  </Drawer.Portal>
</Drawer.Root>`,
  },
  Popover: {
    imports: ['Popover'],
    description: 'Use a popover for content anchored to a trigger. Positioner controls its placement.',
    example: `<Popover.Root>
  <Popover.Trigger>Help</Popover.Trigger>
  <Popover.Portal>
    <Popover.Positioner sideOffset={8}>
      <Popover.Popup>
        <Popover.Title>Keyboard shortcuts</Popover.Title>
        <Popover.Description>Press Escape to close.</Popover.Description>
      </Popover.Popup>
    </Popover.Positioner>
  </Popover.Portal>
</Popover.Root>`,
  },
  'Preview Card': {
    imports: ['PreviewCard'],
    description: 'Show supplementary information when a link is hovered or focused.',
    example: `<PreviewCard.Root>
  <PreviewCard.Trigger href="https://base-ui.com">Base UI</PreviewCard.Trigger>
  <PreviewCard.Portal>
    <PreviewCard.Positioner sideOffset={8}>
      <PreviewCard.Popup>Accessible React primitives.</PreviewCard.Popup>
    </PreviewCard.Positioner>
  </PreviewCard.Portal>
</PreviewCard.Root>`,
  },
  Tooltip: {
    imports: ['Tooltip'],
    description: 'Wrap tooltips in a provider. Give icon-only triggers their own accessible name.',
    example: `<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger aria-label="More information">?</Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Positioner sideOffset={6}>
        <Tooltip.Popup>Changes are saved automatically.</Tooltip.Popup>
      </Tooltip.Positioner>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>`,
  },
  Menu: {
    imports: ['Menu'],
    description: 'Use menu items for actions and link items for navigation.',
    example: `<Menu.Root>
  <Menu.Trigger>Actions</Menu.Trigger>
  <Menu.Portal>
    <Menu.Positioner sideOffset={4}>
      <Menu.Popup>
        <Menu.Item onClick={() => console.info('Rename')}>Rename</Menu.Item>
        <Menu.LinkItem href="/archive">View archive</Menu.LinkItem>
      </Menu.Popup>
    </Menu.Positioner>
  </Menu.Portal>
</Menu.Root>`,
  },
  'Context Menu': {
    imports: ['ContextMenu'],
    description: 'Right click a target to open nearby actions. Keep important actions available elsewhere too.',
    example: `<ContextMenu.Root>
  <ContextMenu.Trigger>Right click this area</ContextMenu.Trigger>
  <ContextMenu.Portal>
    <ContextMenu.Positioner>
      <ContextMenu.Popup>
        <ContextMenu.Item onClick={() => console.info('Rename')}>Rename</ContextMenu.Item>
      </ContextMenu.Popup>
    </ContextMenu.Positioner>
  </ContextMenu.Portal>
</ContextMenu.Root>`,
  },
  Menubar: {
    imports: ['Menubar', 'Menu'],
    description: 'Group persistent menus in a horizontal bar with shared keyboard navigation.',
    example: `<Menubar aria-label="Editor actions">
  <Menu.Root>
    <Menu.Trigger>File</Menu.Trigger>
    <Menu.Portal>
      <Menu.Positioner sideOffset={4}>
        <Menu.Popup><Menu.Item>New file</Menu.Item></Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  </Menu.Root>
</Menubar>`,
  },
  'Navigation Menu': {
    imports: ['NavigationMenu'],
    description: 'Group navigation links in a list. Use a viewport for items with expandable content.',
    example: `<NavigationMenu.Root aria-label="Main navigation">
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="#docs">Documentation</NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>`,
  },
  Toast: {
    imports: ['Toast', 'Button'],
    description: 'Keep the toast manager inside a provider and render notifications in a portaled viewport.',
    example: `function Notifications() {
  const manager = Toast.useToastManager()

  return (
    <>
      <Button onClick={() => manager.add({ title: 'Changes saved' })}>Save</Button>
      <Toast.Portal>
        <Toast.Viewport>
          {manager.toasts.map((toast) => (
            <Toast.Root key={toast.id} toast={toast}>
              <Toast.Content>
                <Toast.Title />
                <Toast.Close>Dismiss</Toast.Close>
              </Toast.Content>
            </Toast.Root>
          ))}
        </Toast.Viewport>
      </Toast.Portal>
    </>
  )
}

export function Example() {
  return <Toast.Provider><Notifications /></Toast.Provider>
}`,
  },
  Accordion: {
    imports: ['Accordion'],
    description: 'Use one item per heading and give each item a distinct value.',
    example: `<Accordion.Root>
  <Accordion.Item value="shipping">
    <Accordion.Header><Accordion.Trigger>Shipping</Accordion.Trigger></Accordion.Header>
    <Accordion.Panel>Ships within two business days.</Accordion.Panel>
  </Accordion.Item>
</Accordion.Root>`,
  },
  Collapsible: {
    imports: ['Collapsible'],
    description: 'Use a collapsible for a single disclosure with a trigger and a panel.',
    example: `<Collapsible.Root>
  <Collapsible.Trigger>Show details</Collapsible.Trigger>
  <Collapsible.Panel>Shared with your team.</Collapsible.Panel>
</Collapsible.Root>`,
  },
  Tabs: {
    imports: ['Tabs'],
    description: 'Use matching values to connect each tab to its panel.',
    example: `<Tabs.Root defaultValue="overview">
  <Tabs.List>
    <Tabs.Tab value="overview">Overview</Tabs.Tab>
    <Tabs.Tab value="settings">Settings</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="overview">Account overview</Tabs.Panel>
  <Tabs.Panel value="settings">Account settings</Tabs.Panel>
</Tabs.Root>`,
  },
  Avatar: {
    imports: ['Avatar'],
    description: 'Provide a fallback for an image that is loading or unavailable.',
    example: `<Avatar.Root>
  <Avatar.Image src="/avatar.png" alt="Alex Chen" />
  <Avatar.Fallback>AC</Avatar.Fallback>
</Avatar.Root>`,
  },
  Meter: {
    imports: ['Meter'],
    description: 'Use a meter for a measurement within a known range, such as storage used.',
    example: `<Meter.Root value={24} max={100}>
  <Meter.Label>Storage used</Meter.Label>
  <Meter.Value />
  <Meter.Track><Meter.Indicator /></Meter.Track>
</Meter.Root>`,
  },
  Progress: {
    imports: ['Progress'],
    description: 'Use Progress for task completion. Set value to null when the amount completed is unknown.',
    example: `<Progress.Root value={40} max={100}>
  <Progress.Label>Exporting</Progress.Label>
  <Progress.Value />
  <Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>`,
  },
  'Scroll Area': {
    imports: ['ScrollArea'],
    description: 'Constrain the root height so the viewport can scroll when content overflows.',
    example: `<ScrollArea.Root style={{ height: 128 }}>
  <ScrollArea.Viewport>
    <ScrollArea.Content>
      {Array.from({ length: 12 }, (_, index) => <p key={index}>Row {index + 1}</p>)}
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar><ScrollArea.Thumb /></ScrollArea.Scrollbar>
</ScrollArea.Root>`,
  },
  Separator: {
    imports: ['Separator'],
    description: 'Use a horizontal separator by default or set orientation for a vertical divider.',
    example: '<Separator orientation="horizontal" />',
  },
  Toolbar: {
    imports: ['Toolbar'],
    description: 'Group related actions under an accessible name. Toolbar manages keyboard navigation.',
    example: `<Toolbar.Root aria-label="Formatting">
  <Toolbar.Button>Bold</Toolbar.Button>
  <Toolbar.Button>Italic</Toolbar.Button>
  <Toolbar.Separator />
  <Toolbar.Input aria-label="Find text" placeholder="Find text" />
</Toolbar.Root>`,
  },
} satisfies Record<string, ComponentDoc>

export type DocumentedDemo = keyof typeof componentDocs

export function getComponentDoc(name: DocumentedDemo): ComponentDoc {
  return componentDocs[name]
}

export function getExampleCode(name: DocumentedDemo) {
  const { imports, example } = getComponentDoc(name)
  return `import { ${imports.join(', ')} } from '@ciamix/ui'\n\n${example}`
}
