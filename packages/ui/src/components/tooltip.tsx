import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function TooltipPortal(props: ComponentPropsWithRef<typeof BaseTooltip.Portal>) {
  return <BaseTooltip.Portal {...props} />;
}

function TooltipPositioner(props: ComponentPropsWithRef<typeof BaseTooltip.Positioner>) {
  return <BaseTooltip.Positioner {...props} />;
}

function TooltipPopup(props: ComponentPropsWithRef<typeof BaseTooltip.Popup>) {
  return <BaseTooltip.Popup {...props} />;
}

function TooltipArrow(props: ComponentPropsWithRef<typeof BaseTooltip.Arrow>) {
  return <BaseTooltip.Arrow {...props} />;
}

function TooltipViewport(props: ComponentPropsWithRef<typeof BaseTooltip.Viewport>) {
  return <BaseTooltip.Viewport {...props} />;
}

/**
 * Ciamix Tooltip: unstyled wrapper around Base UI's Tooltip.
 * Docs: https://base-ui.com/react/components/tooltip
 */
export const Tooltip = {
  Root: BaseTooltip.Root,
  Trigger: BaseTooltip.Trigger,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Popup: TooltipPopup,
  Arrow: TooltipArrow,
  Provider: BaseTooltip.Provider,
  Viewport: TooltipViewport,
  createHandle: BaseTooltip.createHandle,
  Handle: BaseTooltip.Handle,
} satisfies Record<keyof typeof BaseTooltip, unknown>;
