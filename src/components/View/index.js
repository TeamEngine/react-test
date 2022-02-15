/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Flex, Header } from "../styled";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const View = () => {
  const history = useHistory();

  const employees = useSelector(state => state.employees.employees_records);

  console.log(employees);

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex direction="column" alignItems="center" justifyContent="center" marginTop="lg">
        <Box>
          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
      </Flex>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map(employee => (
              <TableRow
                key={employee.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {`${employee.firstName} ${employee.surname}`}
                </TableCell>
                <TableCell align="right">{employee.email}</TableCell>
                <TableCell align="right">{employee.age}</TableCell>
                <TableCell align="right">{employee.jobTitle}</TableCell>
                <TableCell align="right">{employee.jobStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default View;
