import { Drawer as BaseDrawer } from '@base-ui/react/drawer';
import type { ComponentPropsWithRef, RefAttributes } from 'react';

function DrawerBackdrop(props: ComponentPropsWithRef<typeof BaseDrawer.Backdrop>) {
  return <BaseDrawer.Backdrop data-ciamix="modal-backdrop" {...props} />;
}

function DrawerClose(props: ComponentPropsWithRef<typeof BaseDrawer.Close>) {
  return <BaseDrawer.Close data-ciamix="control" {...props} />;
}

function DrawerContent(props: ComponentPropsWithRef<typeof BaseDrawer.Content>) {
  return <BaseDrawer.Content data-ciamix="drawer-content" {...props} />;
}

function DrawerDescription(props: ComponentPropsWithRef<typeof BaseDrawer.Description>) {
  return <BaseDrawer.Description data-ciamix="description" {...props} />;
}

function DrawerIndent(props: ComponentPropsWithRef<typeof BaseDrawer.Indent>) {
  return <BaseDrawer.Indent {...props} />;
}

function DrawerIndentBackground(props: ComponentPropsWithRef<typeof BaseDrawer.IndentBackground>) {
  return <BaseDrawer.IndentBackground {...props} />;
}

function DrawerPopup(props: ComponentPropsWithRef<typeof BaseDrawer.Popup>) {
  return <BaseDrawer.Popup data-ciamix="drawer-popup" {...props} />;
}

function DrawerPortal(props: ComponentPropsWithRef<typeof BaseDrawer.Portal>) {
  return <BaseDrawer.Portal {...props} />;
}

function DrawerSwipeArea(props: ComponentPropsWithRef<typeof BaseDrawer.SwipeArea>) {
  return <BaseDrawer.SwipeArea {...props} />;
}

function DrawerTitle(props: ComponentPropsWithRef<typeof BaseDrawer.Title>) {
  return <BaseDrawer.Title data-ciamix="title" {...props} />;
}

function DrawerViewport(props: ComponentPropsWithRef<typeof BaseDrawer.Viewport>) {
  return <BaseDrawer.Viewport data-ciamix="drawer-viewport" {...props} />;
}

function DrawerTrigger<Payload>(props: BaseDrawer.Trigger.Props<Payload> & RefAttributes<HTMLElement>) {
  return <BaseDrawer.Trigger data-ciamix="control" {...props} />;
}

/**
 * Ciamix Drawer: wrapper around Base UI's Drawer.
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
  Trigger: DrawerTrigger,
  Viewport: DrawerViewport,
  VirtualKeyboardProvider: BaseDrawer.VirtualKeyboardProvider,
  createHandle: BaseDrawer.createHandle,
  Handle: BaseDrawer.Handle,
} satisfies Record<keyof typeof BaseDrawer, unknown>;
