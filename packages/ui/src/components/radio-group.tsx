import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';

export function RadioGroup<Value>(props: BaseRadioGroup.Props<Value>) {
  return <BaseRadioGroup data-ciamix="choice-group" {...props} />;
}

export declare namespace RadioGroup {
  type Props<Value = any> = BaseRadioGroup.Props<Value>;
  type State = BaseRadioGroup.State;
  type ChangeEventReason = BaseRadioGroup.ChangeEventReason;
  type ChangeEventDetails = BaseRadioGroup.ChangeEventDetails;
}
