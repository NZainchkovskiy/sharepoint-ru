import * as React from "react";
import { useField } from "formik";
import {
  TextField,
  ITextFieldProps,
} from "office-ui-fabric-react/lib/TextField";

export const FormTextField: React.FC<ITextFieldProps & { name: string }> = (
  props
) => {
  const [field, meta] = useField(props);
  const errorMessage = meta.touched && meta.error ? meta.error : undefined;
  return <TextField {...field} {...props} errorMessage={errorMessage} />;
};
