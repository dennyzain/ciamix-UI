import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function DialogBackdrop(props: ComponentPropsWithRef<typeof BaseDialog.Backdrop>) {
  return <BaseDialog.Backdrop {...props} />;
}

function DialogClose(props: ComponentPropsWithRef<typeof BaseDialog.Close>) {
  return <BaseDialog.Close {...props} />;
}

function DialogDescription(props: ComponentPropsWithRef<typeof BaseDialog.Description>) {
  return <BaseDialog.Description {...props} />;
}

function DialogPopup(props: ComponentPropsWithRef<typeof BaseDialog.Popup>) {
  return <BaseDialog.Popup {...props} />;
}

function DialogPortal(props: ComponentPropsWithRef<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal {...props} />;
}

function DialogViewport(props: ComponentPropsWithRef<typeof BaseDialog.Viewport>) {
  return <BaseDialog.Viewport {...props} />;
}

function DialogTitle(props: ComponentPropsWithRef<typeof BaseDialog.Title>) {
  return <BaseDialog.Title {...props} />;
}

/**
 * Ciamix Dialog: unstyled wrapper around Base UI's Dialog.
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
  Trigger: BaseDialog.Trigger,
  createHandle: BaseDialog.createHandle,
  Handle: BaseDialog.Handle,
} satisfies Record<keyof typeof BaseDialog, unknown>;
