import { Menubar as BaseMenubar } from '@base-ui/react/menubar';
import type { ComponentPropsWithRef } from 'react';

export type MenubarProps = ComponentPropsWithRef<typeof BaseMenubar>;

/**
 * Ciamix Menubar: unstyled wrapper around Base UI's Menubar.
 * Add styles here once the design is decided.
 * Docs: https://base-ui.com/react/components/menubar
 */
export function Menubar(props: MenubarProps) {
  return <BaseMenubar {...props} />;
}
