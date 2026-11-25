import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import type { ComponentPropsWithRef, RefAttributes } from 'react';

function DialogBackdrop(props: ComponentPropsWithRef<typeof BaseDialog.Backdrop>) {
  return <BaseDialog.Backdrop data-ciamix="modal-backdrop" {...props} />;
}

function DialogClose(props: ComponentPropsWithRef<typeof BaseDialog.Close>) {
  return <BaseDialog.Close data-ciamix="control" {...props} />;
}

function DialogDescription(props: ComponentPropsWithRef<typeof BaseDialog.Description>) {
  return <BaseDialog.Description data-ciamix="description" {...props} />;
}

function DialogPopup(props: ComponentPropsWithRef<typeof BaseDialog.Popup>) {
  return <BaseDialog.Popup data-ciamix="dialog-popup" {...props} />;
}

function DialogPortal(props: ComponentPropsWithRef<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal {...props} />;
}

function DialogViewport(props: ComponentPropsWithRef<typeof BaseDialog.Viewport>) {
  return <BaseDialog.Viewport data-ciamix="dialog-viewport" {...props} />;
}

function DialogTitle(props: ComponentPropsWithRef<typeof BaseDialog.Title>) {
  return <BaseDialog.Title data-ciamix="title" {...props} />;
}

function DialogTrigger<Payload>(props: BaseDialog.Trigger.Props<Payload> & RefAttributes<HTMLElement>) {
  return <BaseDialog.Trigger data-ciamix="control" {...props} />;
}

/**
 * Ciamix Dialog: wrapper around Base UI's Dialog.
 * Docs: https://base-ui.com/react/components/dialog
 */
export const Dialog = {
  Backdrop: DialogBackdrop,
  Close: DialogClose,
  Description: DialogDescription,
  Popup: DialogPopup,
  Portal: DialogPortal,
  Root: BaseDialog.Root,
  Viewport: DialogViewport,
  Title: DialogTitle,
  Trigger: DialogTrigger,
  createHandle: BaseDialog.createHandle,
  Handle: BaseDialog.Handle,
} satisfies Record<keyof typeof BaseDialog, unknown>;
