import React, { useCallback } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Flex, Header } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";

const Create = () => {
  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      dispatch(saveNewEmployee(employee));
    },
    [dispatch]
  );

  return (
    <>
      <Header>Create new employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          firstName: "",
          surname: "",
          email: "",
        }}
      >
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Flex alignItems="left" direction="column" width="300px">
            <FormField name="firstName" placeholder="First name" />
            <FormField name="surname" placeholder="Surname" />
            <FormField name="email" placeholder="Email" />
            <FormButtons />
          </Flex>
        </Flex>
      </Formik>
    </>
  );
};

export default Create;
