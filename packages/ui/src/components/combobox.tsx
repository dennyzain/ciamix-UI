import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function ComboboxLabel(props: ComponentPropsWithRef<typeof BaseCombobox.Label>) {
  return <BaseCombobox.Label {...props} />;
}

function ComboboxInput(props: ComponentPropsWithRef<typeof BaseCombobox.Input>) {
  return <BaseCombobox.Input {...props} />;
}

function ComboboxInputGroup(props: ComponentPropsWithRef<typeof BaseCombobox.InputGroup>) {
  return <BaseCombobox.InputGroup {...props} />;
}

function ComboboxTrigger(props: ComponentPropsWithRef<typeof BaseCombobox.Trigger>) {
  return <BaseCombobox.Trigger {...props} />;
}

function ComboboxList(props: ComponentPropsWithRef<typeof BaseCombobox.List>) {
  return <BaseCombobox.List {...props} />;
}

function ComboboxStatus(props: ComponentPropsWithRef<typeof BaseCombobox.Status>) {
  return <BaseCombobox.Status {...props} />;
}

function ComboboxPortal(props: ComponentPropsWithRef<typeof BaseCombobox.Portal>) {
  return <BaseCombobox.Portal {...props} />;
}

function ComboboxBackdrop(props: ComponentPropsWithRef<typeof BaseCombobox.Backdrop>) {
  return <BaseCombobox.Backdrop {...props} />;
}

function ComboboxPositioner(props: ComponentPropsWithRef<typeof BaseCombobox.Positioner>) {
  return <BaseCombobox.Positioner {...props} />;
}

function ComboboxPopup(props: ComponentPropsWithRef<typeof BaseCombobox.Popup>) {
  return <BaseCombobox.Popup {...props} />;
}

function ComboboxArrow(props: ComponentPropsWithRef<typeof BaseCombobox.Arrow>) {
  return <BaseCombobox.Arrow {...props} />;
}

function ComboboxIcon(props: ComponentPropsWithRef<typeof BaseCombobox.Icon>) {
  return <BaseCombobox.Icon {...props} />;
}

function ComboboxGroup(props: ComponentPropsWithRef<typeof BaseCombobox.Group>) {
  return <BaseCombobox.Group {...props} />;
}

function ComboboxGroupLabel(props: ComponentPropsWithRef<typeof BaseCombobox.GroupLabel>) {
  return <BaseCombobox.GroupLabel {...props} />;
}

function ComboboxItem(props: ComponentPropsWithRef<typeof BaseCombobox.Item>) {
  return <BaseCombobox.Item {...props} />;
}

function ComboboxItemIndicator(props: ComponentPropsWithRef<typeof BaseCombobox.ItemIndicator>) {
  return <BaseCombobox.ItemIndicator {...props} />;
}

function ComboboxChips(props: ComponentPropsWithRef<typeof BaseCombobox.Chips>) {
  return <BaseCombobox.Chips {...props} />;
}

function ComboboxChip(props: ComponentPropsWithRef<typeof BaseCombobox.Chip>) {
  return <BaseCombobox.Chip {...props} />;
}

function ComboboxChipRemove(props: ComponentPropsWithRef<typeof BaseCombobox.ChipRemove>) {
  return <BaseCombobox.ChipRemove {...props} />;
}

function ComboboxRow(props: ComponentPropsWithRef<typeof BaseCombobox.Row>) {
  return <BaseCombobox.Row {...props} />;
}

function ComboboxEmpty(props: ComponentPropsWithRef<typeof BaseCombobox.Empty>) {
  return <BaseCombobox.Empty {...props} />;
}

function ComboboxClear(props: ComponentPropsWithRef<typeof BaseCombobox.Clear>) {
  return <BaseCombobox.Clear {...props} />;
}

function ComboboxSeparator(props: ComponentPropsWithRef<typeof BaseCombobox.Separator>) {
  return <BaseCombobox.Separator {...props} />;
}

/**
 * Ciamix Combobox: unstyled wrapper around Base UI's Combobox.
 * Docs: https://base-ui.com/react/components/combobox
 */
export const Combobox = {
  Root: BaseCombobox.Root,
  Label: ComboboxLabel,
  Value: BaseCombobox.Value,
  Input: ComboboxInput,
  InputGroup: ComboboxInputGroup,
  Trigger: ComboboxTrigger,
  List: ComboboxList,
  Status: ComboboxStatus,
  Portal: ComboboxPortal,
  Backdrop: ComboboxBackdrop,
  Positioner: ComboboxPositioner,
  Popup: ComboboxPopup,
  Arrow: ComboboxArrow,
  Icon: ComboboxIcon,
  Group: ComboboxGroup,
  GroupLabel: ComboboxGroupLabel,
  Item: ComboboxItem,
  ItemIndicator: ComboboxItemIndicator,
  Chips: ComboboxChips,
  Chip: ComboboxChip,
  ChipRemove: ComboboxChipRemove,
  Row: ComboboxRow,
  Collection: BaseCombobox.Collection,
  Empty: ComboboxEmpty,
  Clear: ComboboxClear,
  Separator: ComboboxSeparator,
  useFilter: BaseCombobox.useFilter,
  useFilteredItems: BaseCombobox.useFilteredItems,
  createItems: BaseCombobox.createItems,
} satisfies Record<keyof typeof BaseCombobox, unknown>;
