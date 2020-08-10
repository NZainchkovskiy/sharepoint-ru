import * as React from "react";
import { IModule05Props } from "./IModule05Props";
import { Formik } from "formik";
import { FormTextField } from "./FormTextField";
import { FormCheckbox } from "./FormCheckBox";
import { PrimaryButton } from "office-ui-fabric-react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

interface FormValues {
  firstName: string;
  lastName: string;
  wantToSubscribe: boolean;
  email?: string;
}

const Container = styled.div`
  padding: 10px;
`;

const Button = styled(PrimaryButton)`
  margin-top: 10px;
`;

const ValuesContainer = styled.div`
  border: 1px solid gray;
  padding: 10px;
  margin-top: 10px;
`;

const EmailContainer = styled(motion.div)`
  overflow-y: hidden;
`;
const motionVariants = {
  visible: {
    height: "auto",
  },
  invisible: { height: 0 },
};

export const Module05: React.FC<IModule05Props> = (props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    wantToSubscribe: false,
    email: "",
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.firstName) {
      errors.firstName = "Please enter your first name";
    }
    if (!values.lastName) {
      errors.lastName = "Please enter your last name";
    }
    if (values.wantToSubscribe) {
      if (!values.email) {
        errors.email = "Please enter your email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
    }
    return errors;
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <>
            <FormTextField name="firstName" label="First Name" required />
            <FormTextField name="lastName" label="Last Name" required />
            <FormCheckbox name="wantToSubscribe" label="Want to subscribe?" />
            <AnimatePresence>
              {formik.values.wantToSubscribe ? (
                <EmailContainer
                  variants={motionVariants}
                  initial="invisible"
                  animate="visible"
                  exit="invisible"
                >
                  <FormTextField name="email" label="Email" required />
                </EmailContainer>
              ) : null}
            </AnimatePresence>

            <Button
              text="Submit"
              onClick={() => formik.handleSubmit()}
              disabled={formik.isSubmitting}
            />
            <ValuesContainer>
              {JSON.stringify(formik.values, null, 2)}
            </ValuesContainer>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Module05;
