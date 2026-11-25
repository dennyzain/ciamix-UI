import { Menubar as BaseMenubar } from '@base-ui/react/menubar';
import type { ComponentPropsWithRef } from 'react';

export type MenubarProps = ComponentPropsWithRef<typeof BaseMenubar>;

/**
 * Ciamix Menubar: wrapper around Base UI's Menubar.
 * Docs: https://base-ui.com/react/components/menubar
 */
export function Menubar(props: MenubarProps) {
  return <BaseMenubar data-ciamix="menubar" {...props} />;
}
