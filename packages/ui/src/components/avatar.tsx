import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function AvatarRoot(props: ComponentPropsWithRef<typeof BaseAvatar.Root>) {
  return <BaseAvatar.Root {...props} />;
}

function AvatarImage(props: ComponentPropsWithRef<typeof BaseAvatar.Image>) {
  return <BaseAvatar.Image {...props} />;
}

function AvatarFallback(props: ComponentPropsWithRef<typeof BaseAvatar.Fallback>) {
  return <BaseAvatar.Fallback {...props} />;
}

/**
 * Ciamix Avatar: unstyled wrapper around Base UI's Avatar.
 * Docs: https://base-ui.com/react/components/avatar
 */
export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
} satisfies Record<keyof typeof BaseAvatar, unknown>;
