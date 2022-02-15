import React from "react";
import { Field, useFormikContext } from "formik";
import ErrorMessage from "./styled/ErrorMessage";

function Select(props) {
  const { label, name, options, ...rest } = props;

  const { errors, touched } = useFormikContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label> &ensp;
      <Field as="select" id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      {/* <ErrorMessage name={name} /> */}
      {errors[name] && touched[name] && (
        <ErrorMessage data-cy={`${name}ErrorMessage`}>{errors[name]}</ErrorMessage>
      )}
      <br />
    </div>
  );
}

export default Select;
