import { Accordion, Avatar, Collapsible, Meter, Progress, ScrollArea, Separator, Tabs, Toolbar } from '@ciamix/ui'
import type { Demo } from './types.ts'

// Preview-only outlines so tracks and bars are visible before any design exists.
const outline = { border: '1px solid', width: 200, height: 8 }
const fill = { background: 'currentColor', height: '100%' }

export const displayDemos: Demo[] = [
  {
    name: 'Accordion',
    render: () => (
      <Accordion.Root>
        {['What is Ciamix UI?', 'How do I style it?'].map((question) => (
          <Accordion.Item key={question}>
            <Accordion.Header>
              <Accordion.Trigger>{question}</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel>Answer to “{question}”.</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    ),
  },
  {
    name: 'Collapsible',
    render: () => (
      <Collapsible.Root>
        <Collapsible.Trigger>Recovery keys</Collapsible.Trigger>
        <Collapsible.Panel>alien-bean-pasta · wild-irish-burrito</Collapsible.Panel>
      </Collapsible.Root>
    ),
  },
  {
    name: 'Tabs',
    render: () => (
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="projects">Projects</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="overview">Overview panel</Tabs.Panel>
        <Tabs.Panel value="projects">Projects panel</Tabs.Panel>
      </Tabs.Root>
    ),
  },
  {
    name: 'Avatar',
    render: () => (
      <>
        <Avatar.Root>
          <Avatar.Image src="https://avatars.githubusercontent.com/u/0?v=4" width={40} height={40} />
          <Avatar.Fallback>CU</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Fallback>LT</Avatar.Fallback>
        </Avatar.Root>
      </>
    ),
  },
  {
    name: 'Meter',
    render: () => (
      <Meter.Root value={24}>
        <Meter.Label>Storage used</Meter.Label>
        <Meter.Value />
        <Meter.Track style={outline}>
          <Meter.Indicator style={fill} />
        </Meter.Track>
      </Meter.Root>
    ),
  },
  {
    name: 'Progress',
    render: () => (
      <Progress.Root value={40}>
        <Progress.Label>Export data</Progress.Label>
        <Progress.Value />
        <Progress.Track style={outline}>
          <Progress.Indicator style={fill} />
        </Progress.Track>
      </Progress.Root>
    ),
  },
  {
    name: 'Scroll Area',
    render: () => (
      <ScrollArea.Root style={{ height: 80, width: 240, border: '1px solid' }}>
        <ScrollArea.Viewport style={{ height: '100%' }}>
          <ScrollArea.Content>
            {Array.from({ length: 12 }, (_, i) => (
              <p key={i}>Line {i + 1}</p>
            ))}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    ),
  },
  {
    name: 'Separator',
    render: () => (
      <>
        Above
        <Separator style={{ borderTop: '1px solid' }} />
        Below
      </>
    ),
  },
  {
    name: 'Toolbar',
    render: () => (
      <Toolbar.Root>
        <Toolbar.Group aria-label="Formatting">
          <Toolbar.Button>Bold</Toolbar.Button>
          <Toolbar.Button>Italic</Toolbar.Button>
        </Toolbar.Group>
        <Toolbar.Separator />
        <Toolbar.Link href="#toolbar">Edited 51m ago</Toolbar.Link>
        <Toolbar.Input placeholder="Search" />
      </Toolbar.Root>
    ),
  },
]
