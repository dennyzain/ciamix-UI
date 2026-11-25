import { Toast as BaseToast } from '@base-ui/react/toast';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function ToastViewport(props: ComponentPropsWithRef<typeof BaseToast.Viewport>) {
  return <BaseToast.Viewport {...props} />;
}

function ToastRoot(props: ComponentPropsWithRef<typeof BaseToast.Root>) {
  return <BaseToast.Root {...props} />;
}

function ToastContent(props: ComponentPropsWithRef<typeof BaseToast.Content>) {
  return <BaseToast.Content {...props} />;
}

function ToastDescription(props: ComponentPropsWithRef<typeof BaseToast.Description>) {
  return <BaseToast.Description {...props} />;
}

function ToastTitle(props: ComponentPropsWithRef<typeof BaseToast.Title>) {
  return <BaseToast.Title {...props} />;
}

function ToastClose(props: ComponentPropsWithRef<typeof BaseToast.Close>) {
  return <BaseToast.Close {...props} />;
}

function ToastAction(props: ComponentPropsWithRef<typeof BaseToast.Action>) {
  return <BaseToast.Action {...props} />;
}

function ToastPortal(props: ComponentPropsWithRef<typeof BaseToast.Portal>) {
  return <BaseToast.Portal {...props} />;
}

function ToastPositioner(props: ComponentPropsWithRef<typeof BaseToast.Positioner>) {
  return <BaseToast.Positioner {...props} />;
}

function ToastArrow(props: ComponentPropsWithRef<typeof BaseToast.Arrow>) {
  return <BaseToast.Arrow {...props} />;
}

/**
 * Ciamix Toast: unstyled wrapper around Base UI's Toast.
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
