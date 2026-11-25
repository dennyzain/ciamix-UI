import { Popover as BasePopover } from '@base-ui/react/popover';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function PopoverPortal(props: ComponentPropsWithRef<typeof BasePopover.Portal>) {
  return <BasePopover.Portal {...props} />;
}

function PopoverPositioner(props: ComponentPropsWithRef<typeof BasePopover.Positioner>) {
  return <BasePopover.Positioner {...props} />;
}

function PopoverPopup(props: ComponentPropsWithRef<typeof BasePopover.Popup>) {
  return <BasePopover.Popup {...props} />;
}

function PopoverArrow(props: ComponentPropsWithRef<typeof BasePopover.Arrow>) {
  return <BasePopover.Arrow {...props} />;
}

function PopoverBackdrop(props: ComponentPropsWithRef<typeof BasePopover.Backdrop>) {
  return <BasePopover.Backdrop {...props} />;
}

function PopoverTitle(props: ComponentPropsWithRef<typeof BasePopover.Title>) {
  return <BasePopover.Title {...props} />;
}

function PopoverDescription(props: ComponentPropsWithRef<typeof BasePopover.Description>) {
  return <BasePopover.Description {...props} />;
}

function PopoverClose(props: ComponentPropsWithRef<typeof BasePopover.Close>) {
  return <BasePopover.Close {...props} />;
}

function PopoverViewport(props: ComponentPropsWithRef<typeof BasePopover.Viewport>) {
  return <BasePopover.Viewport {...props} />;
}

/**
 * Ciamix Popover: unstyled wrapper around Base UI's Popover.
 * Docs: https://base-ui.com/react/components/popover
 */
export const Popover = {
  Root: BasePopover.Root,
  Trigger: BasePopover.Trigger,
  Portal: PopoverPortal,
  Positioner: PopoverPositioner,
  Popup: PopoverPopup,
  Arrow: PopoverArrow,
  Backdrop: PopoverBackdrop,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
  Viewport: PopoverViewport,
  createHandle: BasePopover.createHandle,
  Handle: BasePopover.Handle,
} satisfies Record<keyof typeof BasePopover, unknown>;
