import React, { useCallback } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Flex, Header } from "../styled";
import FormField from "./FormField";
import Select from "./Select";
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

  const jobStatusDropdown = [
    { key: "Select an option", value: "" },
    { key: "Active", value: "ACTIVE" },
    { key: "Leave of Absence", value: "LEAVE_OF_ABSENCE" },
    { key: "Terminated", value: "TERMINATED" },
  ];

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
          jobStatus: "",
        }}
      >
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Flex alignItems="left" direction="column" width="300px">
            <FormField name="firstName" placeholder="First name" />

            <FormField name="surname" placeholder="Surname" />

            <FormField name="email" placeholder="Email" />

            <FormField name="age" placeholder="Age" />

            <FormField name="jobTitle" placeholder="Job Title" />

            <Select label="Job Status" name="jobStatus" options={jobStatusDropdown} />

            <FormButtons className="formButtons-top" />
          </Flex>
        </Flex>
      </Formik>
    </>
  );
};

export default Create;
