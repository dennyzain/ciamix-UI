import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import type { ComponentPropsWithRef } from 'react';

function AvatarRoot(props: ComponentPropsWithRef<typeof BaseAvatar.Root>) {
  return <BaseAvatar.Root data-ciamix="avatar" {...props} />;
}

function AvatarImage(props: ComponentPropsWithRef<typeof BaseAvatar.Image>) {
  return <BaseAvatar.Image data-ciamix="avatar-image" {...props} />;
}

function AvatarFallback(props: ComponentPropsWithRef<typeof BaseAvatar.Fallback>) {
  return <BaseAvatar.Fallback data-ciamix="avatar-fallback" {...props} />;
}

/**
 * Ciamix Avatar: wrapper around Base UI's Avatar.
 * Docs: https://base-ui.com/react/components/avatar
 */
export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
} satisfies Record<keyof typeof BaseAvatar, unknown>;
