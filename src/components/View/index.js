/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { removeEmployee } from "../../redux/employees/actionCreators";
import { Box, Button, Flex, Header } from "../styled";

const View = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const employees = useSelector(state => state.employees.employees_records);

  console.log(employees);

  return (
    <>
      <Header data-cy="header">View Employees</Header>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="left">Position</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="left">Actions</TableCell>
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

                <TableCell align="right">
                  <Stack direction="row" spacing={1}>
                    <IconButton aria-label="delete" color="success">
                      <EditIcon onClick={() => dispatch(removeEmployee(employee.id))} />
                    </IconButton>

                    <IconButton aria-label="edit" color="secondary">
                      <DeleteIcon onClick={() => dispatch(removeEmployee(employee.id))} />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Flex direction="column" alignItems="center" justifyContent="center" marginTop="lg">
        <Box>
          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
