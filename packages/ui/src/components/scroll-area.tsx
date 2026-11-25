import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import type { ComponentPropsWithRef } from 'react';

function ScrollAreaRoot(props: ComponentPropsWithRef<typeof BaseScrollArea.Root>) {
  return <BaseScrollArea.Root data-ciamix="scroll-area" {...props} />;
}

function ScrollAreaViewport(props: ComponentPropsWithRef<typeof BaseScrollArea.Viewport>) {
  return <BaseScrollArea.Viewport data-ciamix="scroll-viewport" {...props} />;
}

function ScrollAreaScrollbar(props: ComponentPropsWithRef<typeof BaseScrollArea.Scrollbar>) {
  return <BaseScrollArea.Scrollbar data-ciamix="scrollbar" {...props} />;
}

function ScrollAreaContent(props: ComponentPropsWithRef<typeof BaseScrollArea.Content>) {
  return <BaseScrollArea.Content {...props} />;
}

function ScrollAreaThumb(props: ComponentPropsWithRef<typeof BaseScrollArea.Thumb>) {
  return <BaseScrollArea.Thumb data-ciamix="scroll-thumb" {...props} />;
}

function ScrollAreaCorner(props: ComponentPropsWithRef<typeof BaseScrollArea.Corner>) {
  return <BaseScrollArea.Corner data-ciamix="scroll-corner" {...props} />;
}

/**
 * Ciamix ScrollArea: wrapper around Base UI's ScrollArea.
 * Docs: https://base-ui.com/react/components/scroll-area
 */
export const ScrollArea = {
  Root: ScrollAreaRoot,
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollbar,
  Content: ScrollAreaContent,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
} satisfies Record<keyof typeof BaseScrollArea, unknown>;
