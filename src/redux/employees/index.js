import { createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line no-unused-vars
const defaultEmployee = {
  id: new Date().getTime(),
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@example.com",
  age: 33,
  jobTitle: "Work grouch",
  jobStatus: "ACTIVE",
};

const initialState = {
  employees_records: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveNewEmployee: {
      prepare: employee => ({
        payload: { ...employee, id: new Date().getTime() },
      }),
      reducer(draftState, action) {
        draftState.employees_records = [...draftState.employees_records, action.payload];
      },
    },
  },
});

export const { saveNewEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
