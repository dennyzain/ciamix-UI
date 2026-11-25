import { Select as BaseSelect } from '@base-ui/react/select';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function SelectLabel(props: ComponentPropsWithRef<typeof BaseSelect.Label>) {
  return <BaseSelect.Label {...props} />;
}

function SelectTrigger(props: ComponentPropsWithRef<typeof BaseSelect.Trigger>) {
  return <BaseSelect.Trigger {...props} />;
}

function SelectValue(props: ComponentPropsWithRef<typeof BaseSelect.Value>) {
  return <BaseSelect.Value {...props} />;
}

function SelectIcon(props: ComponentPropsWithRef<typeof BaseSelect.Icon>) {
  return <BaseSelect.Icon {...props} />;
}

function SelectPortal(props: ComponentPropsWithRef<typeof BaseSelect.Portal>) {
  return <BaseSelect.Portal {...props} />;
}

function SelectBackdrop(props: ComponentPropsWithRef<typeof BaseSelect.Backdrop>) {
  return <BaseSelect.Backdrop {...props} />;
}

function SelectPositioner(props: ComponentPropsWithRef<typeof BaseSelect.Positioner>) {
  return <BaseSelect.Positioner {...props} />;
}

function SelectPopup(props: ComponentPropsWithRef<typeof BaseSelect.Popup>) {
  return <BaseSelect.Popup {...props} />;
}

function SelectList(props: ComponentPropsWithRef<typeof BaseSelect.List>) {
  return <BaseSelect.List {...props} />;
}

function SelectItem(props: ComponentPropsWithRef<typeof BaseSelect.Item>) {
  return <BaseSelect.Item {...props} />;
}

function SelectItemIndicator(props: ComponentPropsWithRef<typeof BaseSelect.ItemIndicator>) {
  return <BaseSelect.ItemIndicator {...props} />;
}

function SelectItemText(props: ComponentPropsWithRef<typeof BaseSelect.ItemText>) {
  return <BaseSelect.ItemText {...props} />;
}

function SelectArrow(props: ComponentPropsWithRef<typeof BaseSelect.Arrow>) {
  return <BaseSelect.Arrow {...props} />;
}

function SelectScrollDownArrow(props: ComponentPropsWithRef<typeof BaseSelect.ScrollDownArrow>) {
  return <BaseSelect.ScrollDownArrow {...props} />;
}

function SelectScrollUpArrow(props: ComponentPropsWithRef<typeof BaseSelect.ScrollUpArrow>) {
  return <BaseSelect.ScrollUpArrow {...props} />;
}

function SelectGroup(props: ComponentPropsWithRef<typeof BaseSelect.Group>) {
  return <BaseSelect.Group {...props} />;
}

function SelectGroupLabel(props: ComponentPropsWithRef<typeof BaseSelect.GroupLabel>) {
  return <BaseSelect.GroupLabel {...props} />;
}

function SelectSeparator(props: ComponentPropsWithRef<typeof BaseSelect.Separator>) {
  return <BaseSelect.Separator {...props} />;
}

/**
 * Ciamix Select: unstyled wrapper around Base UI's Select.
 * Docs: https://base-ui.com/react/components/select
 */
export const Select = {
  Root: BaseSelect.Root,
  Label: SelectLabel,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
  Backdrop: SelectBackdrop,
  Positioner: SelectPositioner,
  Popup: SelectPopup,
  List: SelectList,
  Item: SelectItem,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Arrow: SelectArrow,
  ScrollDownArrow: SelectScrollDownArrow,
  ScrollUpArrow: SelectScrollUpArrow,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  Separator: SelectSeparator,
} satisfies Record<keyof typeof BaseSelect, unknown>;
