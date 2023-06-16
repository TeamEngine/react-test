import React, { useCallback } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Flex, Header } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";

const EMPLOYEE_STATUS = ["ACTIVE ", "LEAVE_OF_ABSENCE", "TERMINATED"];

const Create = () => {
  const dispatch = useDispatch();
  const submitForm = useCallback(
    (employee, actions) => {
      dispatch(saveNewEmployee(employee));
      actions.resetForm();
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
          birthDate: "",
          status: "",
          jobTitle: "",
        }}
      >
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Flex alignItems="left" direction="column" width="300px">
            <FormField name="firstName" placeholder="First name" />
            <FormField name="surname" placeholder="Surname" />
            <FormField name="email" placeholder="Email" />
            <FormField name="birthDate" placeholder="Birth date" type="date" />
            <FormField
              name="status"
              placeholder="Please select an option"
              type="select"
              options={EMPLOYEE_STATUS}
            />
            <FormField name="jobTitle" placeholder="Job title" />
            <FormButtons />
          </Flex>
        </Flex>
      </Formik>
    </>
  );
};

export default Create;
