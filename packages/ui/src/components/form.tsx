import { Form as BaseForm } from '@base-ui/react/form';
import type { RefAttributes } from 'react';

export function Form<Values extends Record<string, any> = Record<string, any>>(
  props: BaseForm.Props<Values> & RefAttributes<HTMLFormElement>,
) {
  return <BaseForm data-ciamix="form" {...props} />;
}

export declare namespace Form {
  type Props<FormValues extends Record<string, any> = Record<string, any>> = BaseForm.Props<FormValues>;
  type State = BaseForm.State;
  type Actions = BaseForm.Actions;
  type ValidationMode = BaseForm.ValidationMode;
  type SubmitEventReason = BaseForm.SubmitEventReason;
  type SubmitEventDetails = BaseForm.SubmitEventDetails;
  type Values<FormValues extends Record<string, any> = Record<string, any>> = BaseForm.Values<FormValues>;
}
