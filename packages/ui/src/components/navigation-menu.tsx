import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react/navigation-menu';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function NavigationMenuList(props: ComponentPropsWithRef<typeof BaseNavigationMenu.List>) {
  return <BaseNavigationMenu.List {...props} />;
}

function NavigationMenuItem(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Item>) {
  return <BaseNavigationMenu.Item {...props} />;
}

function NavigationMenuContent(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Content>) {
  return <BaseNavigationMenu.Content {...props} />;
}

function NavigationMenuTrigger(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Trigger>) {
  return <BaseNavigationMenu.Trigger {...props} />;
}

function NavigationMenuPortal(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Portal>) {
  return <BaseNavigationMenu.Portal {...props} />;
}

function NavigationMenuPositioner(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Positioner>) {
  return <BaseNavigationMenu.Positioner {...props} />;
}

function NavigationMenuViewport(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Viewport>) {
  return <BaseNavigationMenu.Viewport {...props} />;
}

function NavigationMenuBackdrop(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Backdrop>) {
  return <BaseNavigationMenu.Backdrop {...props} />;
}

function NavigationMenuPopup(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Popup>) {
  return <BaseNavigationMenu.Popup {...props} />;
}

function NavigationMenuArrow(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Arrow>) {
  return <BaseNavigationMenu.Arrow {...props} />;
}

function NavigationMenuLink(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Link>) {
  return <BaseNavigationMenu.Link {...props} />;
}

function NavigationMenuIcon(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Icon>) {
  return <BaseNavigationMenu.Icon {...props} />;
}

/**
 * Ciamix NavigationMenu: unstyled wrapper around Base UI's NavigationMenu.
 * Docs: https://base-ui.com/react/components/navigation-menu
 */
export const NavigationMenu = {
  Root: BaseNavigationMenu.Root,
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Content: NavigationMenuContent,
  Trigger: NavigationMenuTrigger,
  Portal: NavigationMenuPortal,
  Positioner: NavigationMenuPositioner,
  Viewport: NavigationMenuViewport,
  Backdrop: NavigationMenuBackdrop,
  Popup: NavigationMenuPopup,
  Arrow: NavigationMenuArrow,
  Link: NavigationMenuLink,
  Icon: NavigationMenuIcon,
} satisfies Record<keyof typeof BaseNavigationMenu, unknown>;
