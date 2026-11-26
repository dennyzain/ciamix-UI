import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import type { ComponentPropsWithRef, RefAttributes } from 'react';

function AlertDialogBackdrop(props: ComponentPropsWithRef<typeof BaseAlertDialog.Backdrop>) {
  return <BaseAlertDialog.Backdrop data-ciamix="modal-backdrop" {...props} />;
}

function AlertDialogClose(props: ComponentPropsWithRef<typeof BaseAlertDialog.Close>) {
  return <BaseAlertDialog.Close data-ciamix="control" {...props} />;
}

function AlertDialogDescription(props: ComponentPropsWithRef<typeof BaseAlertDialog.Description>) {
  return <BaseAlertDialog.Description data-ciamix="description" {...props} />;
}

function AlertDialogPopup(props: ComponentPropsWithRef<typeof BaseAlertDialog.Popup>) {
  return <BaseAlertDialog.Popup data-ciamix="dialog-popup" {...props} />;
}

function AlertDialogPortal(props: ComponentPropsWithRef<typeof BaseAlertDialog.Portal>) {
  return <BaseAlertDialog.Portal {...props} />;
}

function AlertDialogTitle(props: ComponentPropsWithRef<typeof BaseAlertDialog.Title>) {
  return <BaseAlertDialog.Title data-ciamix="title" {...props} />;
}

function AlertDialogViewport(props: ComponentPropsWithRef<typeof BaseAlertDialog.Viewport>) {
  return <BaseAlertDialog.Viewport data-ciamix="dialog-viewport" {...props} />;
}

function AlertDialogTrigger<Payload>(props: BaseAlertDialog.Trigger.Props<Payload> & RefAttributes<HTMLElement>) {
  return <BaseAlertDialog.Trigger data-ciamix="control" {...props} />;
}

/**
 * Ciamix AlertDialog: wrapper around Base UI's AlertDialog.
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
  Trigger: AlertDialogTrigger,
  Viewport: AlertDialogViewport,
  Handle: BaseAlertDialog.Handle,
  createHandle: BaseAlertDialog.createHandle,
} satisfies Record<keyof typeof BaseAlertDialog, unknown>;
