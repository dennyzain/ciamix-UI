import { Drawer as BaseDrawer } from '@base-ui/react/drawer';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function DrawerBackdrop(props: ComponentPropsWithRef<typeof BaseDrawer.Backdrop>) {
  return <BaseDrawer.Backdrop {...props} />;
}

function DrawerClose(props: ComponentPropsWithRef<typeof BaseDrawer.Close>) {
  return <BaseDrawer.Close {...props} />;
}

function DrawerContent(props: ComponentPropsWithRef<typeof BaseDrawer.Content>) {
  return <BaseDrawer.Content {...props} />;
}

function DrawerDescription(props: ComponentPropsWithRef<typeof BaseDrawer.Description>) {
  return <BaseDrawer.Description {...props} />;
}

function DrawerIndent(props: ComponentPropsWithRef<typeof BaseDrawer.Indent>) {
  return <BaseDrawer.Indent {...props} />;
}

function DrawerIndentBackground(props: ComponentPropsWithRef<typeof BaseDrawer.IndentBackground>) {
  return <BaseDrawer.IndentBackground {...props} />;
}

function DrawerPopup(props: ComponentPropsWithRef<typeof BaseDrawer.Popup>) {
  return <BaseDrawer.Popup {...props} />;
}

function DrawerPortal(props: ComponentPropsWithRef<typeof BaseDrawer.Portal>) {
  return <BaseDrawer.Portal {...props} />;
}

function DrawerSwipeArea(props: ComponentPropsWithRef<typeof BaseDrawer.SwipeArea>) {
  return <BaseDrawer.SwipeArea {...props} />;
}

function DrawerTitle(props: ComponentPropsWithRef<typeof BaseDrawer.Title>) {
  return <BaseDrawer.Title {...props} />;
}

function DrawerViewport(props: ComponentPropsWithRef<typeof BaseDrawer.Viewport>) {
  return <BaseDrawer.Viewport {...props} />;
}

/**
 * Ciamix Drawer: unstyled wrapper around Base UI's Drawer.
 * Docs: https://base-ui.com/react/components/drawer
 */
export const Drawer = {
  Backdrop: DrawerBackdrop,
  Close: DrawerClose,
  Content: DrawerContent,
  Description: DrawerDescription,
  Indent: DrawerIndent,
  IndentBackground: DrawerIndentBackground,
  Popup: DrawerPopup,
  Portal: DrawerPortal,
  Provider: BaseDrawer.Provider,
  Root: BaseDrawer.Root,
  SwipeArea: DrawerSwipeArea,
  Title: DrawerTitle,
  Trigger: BaseDrawer.Trigger,
  Viewport: DrawerViewport,
  VirtualKeyboardProvider: BaseDrawer.VirtualKeyboardProvider,
  createHandle: BaseDrawer.createHandle,
  Handle: BaseDrawer.Handle,
} satisfies Record<keyof typeof BaseDrawer, unknown>;
