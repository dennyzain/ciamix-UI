import { PreviewCard as BasePreviewCard } from '@base-ui/react/preview-card';
import type { ComponentPropsWithRef, RefAttributes } from 'react';

function PreviewCardPortal(props: ComponentPropsWithRef<typeof BasePreviewCard.Portal>) {
  return <BasePreviewCard.Portal {...props} />;
}

function PreviewCardPositioner(props: ComponentPropsWithRef<typeof BasePreviewCard.Positioner>) {
  return <BasePreviewCard.Positioner data-ciamix="positioner" {...props} />;
}

function PreviewCardPopup(props: ComponentPropsWithRef<typeof BasePreviewCard.Popup>) {
  return <BasePreviewCard.Popup data-ciamix="popup" {...props} />;
}

function PreviewCardArrow(props: ComponentPropsWithRef<typeof BasePreviewCard.Arrow>) {
  return <BasePreviewCard.Arrow data-ciamix="popup-arrow" {...props} />;
}

function PreviewCardBackdrop(props: ComponentPropsWithRef<typeof BasePreviewCard.Backdrop>) {
  return <BasePreviewCard.Backdrop data-ciamix="modal-backdrop" {...props} />;
}

function PreviewCardViewport(props: ComponentPropsWithRef<typeof BasePreviewCard.Viewport>) {
  return <BasePreviewCard.Viewport {...props} />;
}

function PreviewCardTrigger<Payload>(props: BasePreviewCard.Trigger.Props<Payload> & RefAttributes<HTMLElement>) {
  return <BasePreviewCard.Trigger data-ciamix="nav-link" {...props} />;
}

/**
 * Ciamix PreviewCard: wrapper around Base UI's PreviewCard.
 * Docs: https://base-ui.com/react/components/preview-card
 */
export const PreviewCard = {
  Root: BasePreviewCard.Root,
  Portal: PreviewCardPortal,
  Trigger: PreviewCardTrigger,
  Positioner: PreviewCardPositioner,
  Popup: PreviewCardPopup,
  Arrow: PreviewCardArrow,
  Backdrop: PreviewCardBackdrop,
  Viewport: PreviewCardViewport,
  createHandle: BasePreviewCard.createHandle,
  Handle: BasePreviewCard.Handle,
} satisfies Record<keyof typeof BasePreviewCard, unknown>;
