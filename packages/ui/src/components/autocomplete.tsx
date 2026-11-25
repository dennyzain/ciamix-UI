import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function AutocompleteTrigger(props: ComponentPropsWithRef<typeof BaseAutocomplete.Trigger>) {
  return <BaseAutocomplete.Trigger {...props} />;
}

function AutocompleteInput(props: ComponentPropsWithRef<typeof BaseAutocomplete.Input>) {
  return <BaseAutocomplete.Input {...props} />;
}

function AutocompleteInputGroup(props: ComponentPropsWithRef<typeof BaseAutocomplete.InputGroup>) {
  return <BaseAutocomplete.InputGroup {...props} />;
}

function AutocompleteIcon(props: ComponentPropsWithRef<typeof BaseAutocomplete.Icon>) {
  return <BaseAutocomplete.Icon {...props} />;
}

function AutocompleteClear(props: ComponentPropsWithRef<typeof BaseAutocomplete.Clear>) {
  return <BaseAutocomplete.Clear {...props} />;
}

function AutocompleteList(props: ComponentPropsWithRef<typeof BaseAutocomplete.List>) {
  return <BaseAutocomplete.List {...props} />;
}

function AutocompleteStatus(props: ComponentPropsWithRef<typeof BaseAutocomplete.Status>) {
  return <BaseAutocomplete.Status {...props} />;
}

function AutocompletePortal(props: ComponentPropsWithRef<typeof BaseAutocomplete.Portal>) {
  return <BaseAutocomplete.Portal {...props} />;
}

function AutocompleteBackdrop(props: ComponentPropsWithRef<typeof BaseAutocomplete.Backdrop>) {
  return <BaseAutocomplete.Backdrop {...props} />;
}

function AutocompletePositioner(props: ComponentPropsWithRef<typeof BaseAutocomplete.Positioner>) {
  return <BaseAutocomplete.Positioner {...props} />;
}

function AutocompletePopup(props: ComponentPropsWithRef<typeof BaseAutocomplete.Popup>) {
  return <BaseAutocomplete.Popup {...props} />;
}

function AutocompleteArrow(props: ComponentPropsWithRef<typeof BaseAutocomplete.Arrow>) {
  return <BaseAutocomplete.Arrow {...props} />;
}

function AutocompleteGroup(props: ComponentPropsWithRef<typeof BaseAutocomplete.Group>) {
  return <BaseAutocomplete.Group {...props} />;
}

function AutocompleteGroupLabel(props: ComponentPropsWithRef<typeof BaseAutocomplete.GroupLabel>) {
  return <BaseAutocomplete.GroupLabel {...props} />;
}

function AutocompleteItem(props: ComponentPropsWithRef<typeof BaseAutocomplete.Item>) {
  return <BaseAutocomplete.Item {...props} />;
}

function AutocompleteRow(props: ComponentPropsWithRef<typeof BaseAutocomplete.Row>) {
  return <BaseAutocomplete.Row {...props} />;
}

function AutocompleteEmpty(props: ComponentPropsWithRef<typeof BaseAutocomplete.Empty>) {
  return <BaseAutocomplete.Empty {...props} />;
}

function AutocompleteSeparator(props: ComponentPropsWithRef<typeof BaseAutocomplete.Separator>) {
  return <BaseAutocomplete.Separator {...props} />;
}

/**
 * Ciamix Autocomplete: unstyled wrapper around Base UI's Autocomplete.
 * Docs: https://base-ui.com/react/components/autocomplete
 */
export const Autocomplete = {
  Root: BaseAutocomplete.Root,
  Value: BaseAutocomplete.Value,
  Trigger: AutocompleteTrigger,
  Input: AutocompleteInput,
  InputGroup: AutocompleteInputGroup,
  Icon: AutocompleteIcon,
  Clear: AutocompleteClear,
  List: AutocompleteList,
  Status: AutocompleteStatus,
  Portal: AutocompletePortal,
  Backdrop: AutocompleteBackdrop,
  Positioner: AutocompletePositioner,
  Popup: AutocompletePopup,
  Arrow: AutocompleteArrow,
  Group: AutocompleteGroup,
  GroupLabel: AutocompleteGroupLabel,
  Item: AutocompleteItem,
  Row: AutocompleteRow,
  Collection: BaseAutocomplete.Collection,
  Empty: AutocompleteEmpty,
  Separator: AutocompleteSeparator,
  useFilter: BaseAutocomplete.useFilter,
  useFilteredItems: BaseAutocomplete.useFilteredItems,
} satisfies Record<keyof typeof BaseAutocomplete, unknown>;
