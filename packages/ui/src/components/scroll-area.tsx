import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function ScrollAreaRoot(props: ComponentPropsWithRef<typeof BaseScrollArea.Root>) {
  return <BaseScrollArea.Root {...props} />;
}

function ScrollAreaViewport(props: ComponentPropsWithRef<typeof BaseScrollArea.Viewport>) {
  return <BaseScrollArea.Viewport {...props} />;
}

function ScrollAreaScrollbar(props: ComponentPropsWithRef<typeof BaseScrollArea.Scrollbar>) {
  return <BaseScrollArea.Scrollbar {...props} />;
}

function ScrollAreaContent(props: ComponentPropsWithRef<typeof BaseScrollArea.Content>) {
  return <BaseScrollArea.Content {...props} />;
}

function ScrollAreaThumb(props: ComponentPropsWithRef<typeof BaseScrollArea.Thumb>) {
  return <BaseScrollArea.Thumb {...props} />;
}

function ScrollAreaCorner(props: ComponentPropsWithRef<typeof BaseScrollArea.Corner>) {
  return <BaseScrollArea.Corner {...props} />;
}

/**
 * Ciamix ScrollArea: unstyled wrapper around Base UI's ScrollArea.
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
