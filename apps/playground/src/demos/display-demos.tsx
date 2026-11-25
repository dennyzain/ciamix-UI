import { Accordion, Avatar, Collapsible, Meter, Progress, ScrollArea, Separator, Tabs, Toolbar } from '@ciamix/ui'
import type { Demo } from './types.ts'

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
          <Avatar.Image src="/favicon.svg" alt="Sample avatar" />
          <Avatar.Fallback>CU</Avatar.Fallback>
        </Avatar.Root>{' '}
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
        <Meter.Track>
          <Meter.Indicator />
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
        <Progress.Track>
          <Progress.Indicator />
        </Progress.Track>
      </Progress.Root>
    ),
  },
  {
    name: 'Scroll Area',
    render: () => (
      <ScrollArea.Root style={{ height: 112, width: 'min(100%, 15rem)' }}>
        <ScrollArea.Viewport>
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
        <Separator />
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
