import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react/navigation-menu';
import type { ComponentPropsWithRef } from 'react';

function NavigationMenuList(props: ComponentPropsWithRef<typeof BaseNavigationMenu.List>) {
  return <BaseNavigationMenu.List data-ciamix="nav-list" {...props} />;
}

function NavigationMenuItem(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Item>) {
  return <BaseNavigationMenu.Item data-ciamix="nav-item" {...props} />;
}

function NavigationMenuContent(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Content>) {
  return <BaseNavigationMenu.Content data-ciamix="nav-content" {...props} />;
}

function NavigationMenuTrigger(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Trigger>) {
  return <BaseNavigationMenu.Trigger data-ciamix="control" {...props} />;
}

function NavigationMenuPortal(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Portal>) {
  return <BaseNavigationMenu.Portal {...props} />;
}

function NavigationMenuPositioner(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Positioner>) {
  return <BaseNavigationMenu.Positioner data-ciamix="positioner" {...props} />;
}

function NavigationMenuViewport(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Viewport>) {
  return <BaseNavigationMenu.Viewport {...props} />;
}

function NavigationMenuBackdrop(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Backdrop>) {
  return <BaseNavigationMenu.Backdrop data-ciamix="modal-backdrop" {...props} />;
}

function NavigationMenuPopup(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Popup>) {
  return <BaseNavigationMenu.Popup data-ciamix="popup" {...props} />;
}

function NavigationMenuArrow(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Arrow>) {
  return <BaseNavigationMenu.Arrow data-ciamix="popup-arrow" {...props} />;
}

function NavigationMenuLink(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Link>) {
  return <BaseNavigationMenu.Link data-ciamix="nav-link" {...props} />;
}

function NavigationMenuIcon(props: ComponentPropsWithRef<typeof BaseNavigationMenu.Icon>) {
  return <BaseNavigationMenu.Icon data-ciamix="icon" {...props} />;
}

function NavigationMenuRoot<Value>(props: BaseNavigationMenu.Root.Props<Value>) {
  return <BaseNavigationMenu.Root data-ciamix="navigation-menu" {...props} />;
}

/**
 * Ciamix NavigationMenu: wrapper around Base UI's NavigationMenu.
 * Docs: https://base-ui.com/react/components/navigation-menu
 */
export const NavigationMenu = {
  Root: NavigationMenuRoot,
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
