import { Popover as BasePopover } from '@base-ui/react/popover';
import type { ComponentPropsWithRef, RefAttributes } from 'react';

function PopoverPortal(props: ComponentPropsWithRef<typeof BasePopover.Portal>) {
  return <BasePopover.Portal {...props} />;
}

function PopoverPositioner(props: ComponentPropsWithRef<typeof BasePopover.Positioner>) {
  return <BasePopover.Positioner data-ciamix="positioner" {...props} />;
}

function PopoverPopup(props: ComponentPropsWithRef<typeof BasePopover.Popup>) {
  return <BasePopover.Popup data-ciamix="popup" {...props} />;
}

function PopoverArrow(props: ComponentPropsWithRef<typeof BasePopover.Arrow>) {
  return <BasePopover.Arrow data-ciamix="popup-arrow" {...props} />;
}

function PopoverBackdrop(props: ComponentPropsWithRef<typeof BasePopover.Backdrop>) {
  return <BasePopover.Backdrop data-ciamix="modal-backdrop" {...props} />;
}

function PopoverTitle(props: ComponentPropsWithRef<typeof BasePopover.Title>) {
  return <BasePopover.Title data-ciamix="title" {...props} />;
}

function PopoverDescription(props: ComponentPropsWithRef<typeof BasePopover.Description>) {
  return <BasePopover.Description data-ciamix="description" {...props} />;
}

function PopoverClose(props: ComponentPropsWithRef<typeof BasePopover.Close>) {
  return <BasePopover.Close data-ciamix="control" {...props} />;
}

function PopoverViewport(props: ComponentPropsWithRef<typeof BasePopover.Viewport>) {
  return <BasePopover.Viewport {...props} />;
}

function PopoverTrigger<Payload>(props: BasePopover.Trigger.Props<Payload> & RefAttributes<HTMLElement>) {
  return <BasePopover.Trigger data-ciamix="control" {...props} />;
}

/**
 * Ciamix Popover: wrapper around Base UI's Popover.
 * Docs: https://base-ui.com/react/components/popover
 */
export const Popover = {
  Root: BasePopover.Root,
  Trigger: PopoverTrigger,
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
