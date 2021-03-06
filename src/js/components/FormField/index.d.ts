import * as React from "react";

export interface FormFieldProps {
  error?: string | React.ReactNode;
  help?: string | React.ReactNode;
  htmlFor?: string;
  label?: string | React.ReactNode;
  name?: string;
  pad?: boolean;
  required?: boolean;
  noMarginBottom?: boolean;
  validate?: {regexp?: object,message?: string} | ((...args: any[]) => any);
}

declare const FormField: React.ComponentType<FormFieldProps & JSX.IntrinsicElements['div']>;

export { FormField };
