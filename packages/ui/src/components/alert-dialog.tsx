import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function AlertDialogBackdrop(props: ComponentPropsWithRef<typeof BaseAlertDialog.Backdrop>) {
  return <BaseAlertDialog.Backdrop {...props} />;
}

function AlertDialogClose(props: ComponentPropsWithRef<typeof BaseAlertDialog.Close>) {
  return <BaseAlertDialog.Close {...props} />;
}

function AlertDialogDescription(props: ComponentPropsWithRef<typeof BaseAlertDialog.Description>) {
  return <BaseAlertDialog.Description {...props} />;
}

function AlertDialogPopup(props: ComponentPropsWithRef<typeof BaseAlertDialog.Popup>) {
  return <BaseAlertDialog.Popup {...props} />;
}

function AlertDialogPortal(props: ComponentPropsWithRef<typeof BaseAlertDialog.Portal>) {
  return <BaseAlertDialog.Portal {...props} />;
}

function AlertDialogTitle(props: ComponentPropsWithRef<typeof BaseAlertDialog.Title>) {
  return <BaseAlertDialog.Title {...props} />;
}

function AlertDialogViewport(props: ComponentPropsWithRef<typeof BaseAlertDialog.Viewport>) {
  return <BaseAlertDialog.Viewport {...props} />;
}

/**
 * Ciamix AlertDialog: unstyled wrapper around Base UI's AlertDialog.
 * Docs: https://base-ui.com/react/components/alert-dialog
 */
export const AlertDialog = {
  Root: BaseAlertDialog.Root,
  Backdrop: AlertDialogBackdrop,
  Close: AlertDialogClose,
  Description: AlertDialogDescription,
  Popup: AlertDialogPopup,
  Portal: AlertDialogPortal,
  Title: AlertDialogTitle,
  Trigger: BaseAlertDialog.Trigger,
  Viewport: AlertDialogViewport,
  Handle: BaseAlertDialog.Handle,
  createHandle: BaseAlertDialog.createHandle,
} satisfies Record<keyof typeof BaseAlertDialog, unknown>;
