import { Toast as BaseToast } from '@base-ui/react/toast';
import type { ComponentPropsWithRef } from 'react';

function ToastViewport(props: ComponentPropsWithRef<typeof BaseToast.Viewport>) {
  return <BaseToast.Viewport data-ciamix="toast-viewport" {...props} />;
}

function ToastRoot(props: ComponentPropsWithRef<typeof BaseToast.Root>) {
  return <BaseToast.Root data-ciamix="toast" {...props} />;
}

function ToastContent(props: ComponentPropsWithRef<typeof BaseToast.Content>) {
  return <BaseToast.Content data-ciamix="toast-content" {...props} />;
}

function ToastDescription(props: ComponentPropsWithRef<typeof BaseToast.Description>) {
  return <BaseToast.Description data-ciamix="description" {...props} />;
}

function ToastTitle(props: ComponentPropsWithRef<typeof BaseToast.Title>) {
  return <BaseToast.Title data-ciamix="title" {...props} />;
}

function ToastClose(props: ComponentPropsWithRef<typeof BaseToast.Close>) {
  return <BaseToast.Close data-ciamix="control" {...props} />;
}

function ToastAction(props: ComponentPropsWithRef<typeof BaseToast.Action>) {
  return <BaseToast.Action data-ciamix="control" {...props} />;
}

function ToastPortal(props: ComponentPropsWithRef<typeof BaseToast.Portal>) {
  return <BaseToast.Portal {...props} />;
}

function ToastPositioner(props: ComponentPropsWithRef<typeof BaseToast.Positioner>) {
  return <BaseToast.Positioner data-ciamix="positioner" {...props} />;
}

function ToastArrow(props: ComponentPropsWithRef<typeof BaseToast.Arrow>) {
  return <BaseToast.Arrow data-ciamix="popup-arrow" {...props} />;
}

/**
 * Ciamix Toast: wrapper around Base UI's Toast.
 * Docs: https://base-ui.com/react/components/toast
 */
export const Toast = {
  Provider: BaseToast.Provider,
  Viewport: ToastViewport,
  Root: ToastRoot,
  Content: ToastContent,
  Description: ToastDescription,
  Title: ToastTitle,
  Close: ToastClose,
  Action: ToastAction,
  Portal: ToastPortal,
  Positioner: ToastPositioner,
  Arrow: ToastArrow,
  useToastManager: BaseToast.useToastManager,
  createToastManager: BaseToast.createToastManager,
} satisfies Record<keyof typeof BaseToast, unknown>;
