import { Menu as BaseMenu } from '@base-ui/react/menu';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function MenuArrow(props: ComponentPropsWithRef<typeof BaseMenu.Arrow>) {
  return <BaseMenu.Arrow {...props} />;
}

function MenuBackdrop(props: ComponentPropsWithRef<typeof BaseMenu.Backdrop>) {
  return <BaseMenu.Backdrop {...props} />;
}

function MenuCheckboxItem(props: ComponentPropsWithRef<typeof BaseMenu.CheckboxItem>) {
  return <BaseMenu.CheckboxItem {...props} />;
}

function MenuCheckboxItemIndicator(props: ComponentPropsWithRef<typeof BaseMenu.CheckboxItemIndicator>) {
  return <BaseMenu.CheckboxItemIndicator {...props} />;
}

function MenuGroup(props: ComponentPropsWithRef<typeof BaseMenu.Group>) {
  return <BaseMenu.Group {...props} />;
}

function MenuGroupLabel(props: ComponentPropsWithRef<typeof BaseMenu.GroupLabel>) {
  return <BaseMenu.GroupLabel {...props} />;
}

function MenuItem(props: ComponentPropsWithRef<typeof BaseMenu.Item>) {
  return <BaseMenu.Item {...props} />;
}

function MenuLinkItem(props: ComponentPropsWithRef<typeof BaseMenu.LinkItem>) {
  return <BaseMenu.LinkItem {...props} />;
}

function MenuPopup(props: ComponentPropsWithRef<typeof BaseMenu.Popup>) {
  return <BaseMenu.Popup {...props} />;
}

function MenuPortal(props: ComponentPropsWithRef<typeof BaseMenu.Portal>) {
  return <BaseMenu.Portal {...props} />;
}

function MenuPositioner(props: ComponentPropsWithRef<typeof BaseMenu.Positioner>) {
  return <BaseMenu.Positioner {...props} />;
}

function MenuRadioGroup(props: ComponentPropsWithRef<typeof BaseMenu.RadioGroup>) {
  return <BaseMenu.RadioGroup {...props} />;
}

function MenuRadioItem(props: ComponentPropsWithRef<typeof BaseMenu.RadioItem>) {
  return <BaseMenu.RadioItem {...props} />;
}

function MenuRadioItemIndicator(props: ComponentPropsWithRef<typeof BaseMenu.RadioItemIndicator>) {
  return <BaseMenu.RadioItemIndicator {...props} />;
}

function MenuViewport(props: ComponentPropsWithRef<typeof BaseMenu.Viewport>) {
  return <BaseMenu.Viewport {...props} />;
}

function MenuSeparator(props: ComponentPropsWithRef<typeof BaseMenu.Separator>) {
  return <BaseMenu.Separator {...props} />;
}

function MenuSubmenuTrigger(props: ComponentPropsWithRef<typeof BaseMenu.SubmenuTrigger>) {
  return <BaseMenu.SubmenuTrigger {...props} />;
}

function MenuInput(props: ComponentPropsWithRef<typeof BaseMenu.Input>) {
  return <BaseMenu.Input {...props} />;
}

function MenuList(props: ComponentPropsWithRef<typeof BaseMenu.List>) {
  return <BaseMenu.List {...props} />;
}

function MenuClear(props: ComponentPropsWithRef<typeof BaseMenu.Clear>) {
  return <BaseMenu.Clear {...props} />;
}

function MenuEmpty(props: ComponentPropsWithRef<typeof BaseMenu.Empty>) {
  return <BaseMenu.Empty {...props} />;
}

/**
 * Ciamix Menu: unstyled wrapper around Base UI's Menu.
 * Docs: https://base-ui.com/react/components/menu
 */
export const Menu = {
  Arrow: MenuArrow,
  Backdrop: MenuBackdrop,
  CheckboxItem: MenuCheckboxItem,
  CheckboxItemIndicator: MenuCheckboxItemIndicator,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Item: MenuItem,
  LinkItem: MenuLinkItem,
  Popup: MenuPopup,
  Portal: MenuPortal,
  Positioner: MenuPositioner,
  RadioGroup: MenuRadioGroup,
  RadioItem: MenuRadioItem,
  RadioItemIndicator: MenuRadioItemIndicator,
  Root: BaseMenu.Root,
  SubmenuRoot: BaseMenu.SubmenuRoot,
  Trigger: BaseMenu.Trigger,
  Viewport: MenuViewport,
  Separator: MenuSeparator,
  SubmenuTrigger: MenuSubmenuTrigger,
  Handle: BaseMenu.Handle,
  createHandle: BaseMenu.createHandle,
  FilterProvider: BaseMenu.FilterProvider,
  Input: MenuInput,
  List: MenuList,
  Clear: MenuClear,
  Empty: MenuEmpty,
  useFilter: BaseMenu.useFilter,
} satisfies Record<keyof typeof BaseMenu, unknown>;
