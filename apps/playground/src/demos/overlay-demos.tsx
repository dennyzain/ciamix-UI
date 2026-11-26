import { useRef } from 'react'
import {
  AlertDialog,
  Button,
  ContextMenu,
  Dialog,
  Drawer,
  Menu,
  Menubar,
  NavigationMenu,
  Popover,
  PreviewCard,
  Toast,
  Tooltip,
} from '@ciamix/ui'
import type { Demo } from './types.ts'

function ToastButton() {
  const toastManager = Toast.useToastManager()
  const count = useRef(0)
  return (
    <Button
      type="button"
      onClick={() => {
        count.current += 1
        toastManager.add({ title: `Toast ${count.current} created`, description: 'This is a toast notification.' })
      }}
    >
      Create toast
    </Button>
  )
}

function ToastList() {
  const { toasts } = Toast.useToastManager()
  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast}>
      <Toast.Content>
        <Toast.Title />
        <Toast.Description />
        <Toast.Close>Dismiss</Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ))
}

function MenuItems() {
  return (
    <>
      <Menu.Item>New</Menu.Item>
      <Menu.Item>Open</Menu.Item>
      <Menu.Separator />
      <Menu.Item>Save</Menu.Item>
    </>
  )
}

export const overlayDemos: Demo[] = [
  {
    name: 'Dialog',
    render: () => (
      <Dialog.Root>
        <Dialog.Trigger>Open dialog</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Viewport>
            <Dialog.Popup>
              <Dialog.Title>Notifications</Dialog.Title>
              <Dialog.Description>You are all caught up.</Dialog.Description>
              <Dialog.Close>Close</Dialog.Close>
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
    ),
  },
  {
    name: 'Alert Dialog',
    render: () => (
      <AlertDialog.Root>
        <AlertDialog.Trigger>Discard draft</AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Viewport>
            <AlertDialog.Popup>
              <AlertDialog.Title>Discard draft?</AlertDialog.Title>
              <AlertDialog.Description>You can't undo this action.</AlertDialog.Description>
              <AlertDialog.Close>Cancel</AlertDialog.Close>
              <AlertDialog.Close>Discard</AlertDialog.Close>
            </AlertDialog.Popup>
          </AlertDialog.Viewport>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    ),
  },
  {
    name: 'Drawer',
    render: () => (
      <Drawer.Root swipeDirection="right">
        <Drawer.Trigger>Open drawer</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop />
          <Drawer.Viewport>
            <Drawer.Popup>
              <Drawer.Content>
                <Drawer.Title>Drawer</Drawer.Title>
                <Drawer.Description>Swipe right or use Close to dismiss.</Drawer.Description>
                <Drawer.Close>Close</Drawer.Close>
              </Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    ),
  },
  {
    name: 'Popover',
    render: () => (
      <Popover.Root>
        <Popover.Trigger>Open popover</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner sideOffset={8}>
            <Popover.Popup>
              <Popover.Arrow />
              <Popover.Title>Notifications</Popover.Title>
              <Popover.Description>You are all caught up.</Popover.Description>
              <Popover.Close>Close</Popover.Close>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    ),
  },
  {
    name: 'Preview Card',
    render: () => (
      <PreviewCard.Root>
        <PreviewCard.Trigger href="https://base-ui.com">Hover this link</PreviewCard.Trigger>
        <PreviewCard.Portal>
          <PreviewCard.Positioner sideOffset={8}>
            <PreviewCard.Popup>
              <PreviewCard.Arrow />
              Base UI: unstyled React components.
            </PreviewCard.Popup>
          </PreviewCard.Positioner>
        </PreviewCard.Portal>
      </PreviewCard.Root>
    ),
  },
  {
    name: 'Tooltip',
    render: () => (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>Hover me</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner sideOffset={8}>
              <Tooltip.Popup>
                <Tooltip.Arrow />
                Tooltip text
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    ),
  },
  {
    name: 'Menu',
    render: () => (
      <Menu.Root>
        <Menu.Trigger>Open menu</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={4}>
            <Menu.Popup>
              <MenuItems />
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    ),
  },
  {
    name: 'Context Menu',
    render: () => (
      <ContextMenu.Root>
        <ContextMenu.Trigger>Right-click here</ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenu.Positioner>
            <ContextMenu.Popup>
              <ContextMenu.Item>Copy</ContextMenu.Item>
              <ContextMenu.Item>Paste</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item>Delete</ContextMenu.Item>
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    ),
  },
  {
    name: 'Menubar',
    render: () => (
      <Menubar>
        {['File', 'Edit'].map((label) => (
          <Menu.Root key={label}>
            <Menu.Trigger>{label}</Menu.Trigger>
            <Menu.Portal>
              <Menu.Positioner sideOffset={4}>
                <Menu.Popup>
                  <MenuItems />
                </Menu.Popup>
              </Menu.Positioner>
            </Menu.Portal>
          </Menu.Root>
        ))}
      </Menubar>
    ),
  },
  {
    name: 'Navigation Menu',
    render: () => (
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              Overview <NavigationMenu.Icon>▾</NavigationMenu.Icon>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link href="https://base-ui.com/react/overview/quick-start">Quick start</NavigationMenu.Link>
              <NavigationMenu.Link href="https://base-ui.com/react/overview/accessibility">Accessibility</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="https://github.com/mui/base-ui">GitHub</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.Portal>
          <NavigationMenu.Positioner sideOffset={8}>
            <NavigationMenu.Popup>
              <NavigationMenu.Arrow />
              <NavigationMenu.Viewport />
            </NavigationMenu.Popup>
          </NavigationMenu.Positioner>
        </NavigationMenu.Portal>
      </NavigationMenu.Root>
    ),
  },
  {
    name: 'Toast',
    render: () => (
      <Toast.Provider>
        <ToastButton />
        <Toast.Portal>
          <Toast.Viewport>
            <ToastList />
          </Toast.Viewport>
        </Toast.Portal>
      </Toast.Provider>
    ),
  },
]
