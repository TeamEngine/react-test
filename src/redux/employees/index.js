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
  // removed defaultEmployee
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

    editEmployee: {
      prepare: employee => ({
        payload: { ...employee },
      }),
      reducer(draftState, action) {
        const i = draftState.employees_records.findIndex(e => e.id === action.payload.id);

        const employeeRecord = [...draftState.employees_records];

        employeeRecord.splice(i, 1, action.payload); // updateEmployee

        draftState.employees_records = employeeRecord;
      },
    },

    removeEmployee: {
      prepare: employeeId => ({
        payload: employeeId,
      }),
      reducer(draftState, action) {
        const i = draftState.employees_records.findIndex(e => e.id === action.payload);

        const employeeRecord = [...draftState.employees_records];

        employeeRecord.splice(i, 1); // removing one record from array

        draftState.employees_records = employeeRecord;
      },
    },
  },
});

export const { saveNewEmployee, editEmployee, removeEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
