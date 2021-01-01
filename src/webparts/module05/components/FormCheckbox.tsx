import * as React from "react";
import { Checkbox, ICheckboxProps } from "office-ui-fabric-react/lib/Checkbox";
import { useField } from "formik";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const FormCheckbox: React.FC<ICheckboxProps & { name: string }> = (
  props
) => {
  const [field] = useField(props);
  return (
    <Container>
      <Checkbox {...field} {...props} />
    </Container>
  );
};
