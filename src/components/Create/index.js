import React, { useCallback } from "react";
import { Formik, Field } from "formik";
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
          firstName: "John",
          surname: "Smith",
          email: "john.smith@outlook.com",
          age: "45",
          jobTitle: "Product Owner",
          jobStatus: "ACTIVE",
        }}
      >
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Flex alignItems="left" direction="column" width="300px">
            <FormField name="firstName" placeholder="First name" />

            <FormField name="surname" placeholder="Surname" />

            <FormField name="email" placeholder="Email" />

            <FormField name="age" placeholder="Age" />

            <FormField name="jobTitle" placeholder="Job Title" />

            <Field as="select" name="status" className="job-status-field">
              <option value="ACTIVE">Active</option>
              <option value="LEAVE_OF_ABSENCE">Leave of Absence</option>
              <option value="TERMINATED">Terminated</option>
            </Field>

            <FormButtons />
          </Flex>
        </Flex>
      </Formik>
    </>
  );
};

export default Create;
