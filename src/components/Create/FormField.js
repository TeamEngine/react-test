import React from "react";
import { Field, useFormikContext } from "formik";
import TextField from "./styled/TextField";
import ErrorMessage from "./styled/ErrorMessage";
import { Box } from "../styled";
import SelectField from "./styled/SelectField";

const FormField = ({ name, placeholder, type = "text", options }) => {
  const { errors, touched } = useFormikContext();

  const handleFieldRender = (field, meta) => {
    switch (type) {
      case "select":
        return (
          <SelectField
            data-cy={`${name}Input`}
            fontSize="lg"
            fluid
            error={meta.error && meta.touched}
            {...field}
          >
            <option value="">{placeholder}</option>
            {options.map((option, idx) => (
              <option value={option} key={idx}>
                {option}
              </option>
            ))}
          </SelectField>
        );
      case "date":
        return (
          <TextField
            type="date"
            data-cy={`${name}Input`}
            fontSize="lg"
            placeholder={placeholder}
            fluid
            error={meta.error && meta.touched}
            onFocus={e => {
              const eventCopy = { ...e };
              eventCopy.target.type = "date";

              return eventCopy;
            }}
            {...field}
          />
        );
      default:
        return (
          <TextField
            data-cy={`${name}Input`}
            fontSize="lg"
            placeholder={placeholder}
            fluid
            error={meta.error && meta.touched}
            {...field}
          />
        );
    }
  };

  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta }) => handleFieldRender(field, meta)}
      </Field>
      {errors[name] && touched[name] && (
        <ErrorMessage data-cy={`${name}ErrorMessage`}>
          {errors[name]}
        </ErrorMessage>
      )}
    </Box>
  );
};

export default FormField;
