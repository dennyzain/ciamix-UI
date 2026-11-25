import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import type { ComponentPropsWithRef, RefAttributes } from 'react';

function TooltipPortal(props: ComponentPropsWithRef<typeof BaseTooltip.Portal>) {
  return <BaseTooltip.Portal {...props} />;
}

function TooltipPositioner(props: ComponentPropsWithRef<typeof BaseTooltip.Positioner>) {
  return <BaseTooltip.Positioner data-ciamix="tooltip-positioner" {...props} />;
}

function TooltipPopup(props: ComponentPropsWithRef<typeof BaseTooltip.Popup>) {
  return <BaseTooltip.Popup data-ciamix="tooltip" {...props} />;
}

function TooltipArrow(props: ComponentPropsWithRef<typeof BaseTooltip.Arrow>) {
  return <BaseTooltip.Arrow data-ciamix="tooltip-arrow" {...props} />;
}

function TooltipViewport(props: ComponentPropsWithRef<typeof BaseTooltip.Viewport>) {
  return <BaseTooltip.Viewport {...props} />;
}

function TooltipTrigger<Payload>(props: BaseTooltip.Trigger.Props<Payload> & RefAttributes<HTMLElement>) {
  return <BaseTooltip.Trigger data-ciamix="control" {...props} />;
}

/**
 * Ciamix Tooltip: wrapper around Base UI's Tooltip.
 * Docs: https://base-ui.com/react/components/tooltip
 */
export const Tooltip = {
  Root: BaseTooltip.Root,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Popup: TooltipPopup,
  Arrow: TooltipArrow,
  Provider: BaseTooltip.Provider,
  Viewport: TooltipViewport,
  createHandle: BaseTooltip.createHandle,
  Handle: BaseTooltip.Handle,
} satisfies Record<keyof typeof BaseTooltip, unknown>;
