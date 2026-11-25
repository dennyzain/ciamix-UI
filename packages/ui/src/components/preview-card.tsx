import { PreviewCard as BasePreviewCard } from '@base-ui/react/preview-card';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function PreviewCardPortal(props: ComponentPropsWithRef<typeof BasePreviewCard.Portal>) {
  return <BasePreviewCard.Portal {...props} />;
}

function PreviewCardPositioner(props: ComponentPropsWithRef<typeof BasePreviewCard.Positioner>) {
  return <BasePreviewCard.Positioner {...props} />;
}

function PreviewCardPopup(props: ComponentPropsWithRef<typeof BasePreviewCard.Popup>) {
  return <BasePreviewCard.Popup {...props} />;
}

function PreviewCardArrow(props: ComponentPropsWithRef<typeof BasePreviewCard.Arrow>) {
  return <BasePreviewCard.Arrow {...props} />;
}

function PreviewCardBackdrop(props: ComponentPropsWithRef<typeof BasePreviewCard.Backdrop>) {
  return <BasePreviewCard.Backdrop {...props} />;
}

function PreviewCardViewport(props: ComponentPropsWithRef<typeof BasePreviewCard.Viewport>) {
  return <BasePreviewCard.Viewport {...props} />;
}

/**
 * Ciamix PreviewCard: unstyled wrapper around Base UI's PreviewCard.
 * Docs: https://base-ui.com/react/components/preview-card
 */
export const PreviewCard = {
  Root: BasePreviewCard.Root,
  Portal: PreviewCardPortal,
  Trigger: BasePreviewCard.Trigger,
  Positioner: PreviewCardPositioner,
  Popup: PreviewCardPopup,
  Arrow: PreviewCardArrow,
  Backdrop: PreviewCardBackdrop,
  Viewport: PreviewCardViewport,
  createHandle: BasePreviewCard.createHandle,
  Handle: BasePreviewCard.Handle,
} satisfies Record<keyof typeof BasePreviewCard, unknown>;
