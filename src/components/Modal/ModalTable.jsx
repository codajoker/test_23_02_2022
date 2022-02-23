import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { styled } from '@mui/system';
import { nanoid } from 'nanoid';
const Root = styled('div')`
  td,
  th,
  tr {
    border: 1px solid #ddd;
    text-align: left;
  }
`;

export function ModalTable({ arrayClients, addContact }) {
  return (
    <>
      <Root>
        <Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 740 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead key={nanoid()}>
                <TableRow key={nanoid()}>
                  <TableCell key={nanoid()} align="center">
                    value
                  </TableCell>
                  <TableCell key={nanoid()} align="center">
                    date
                  </TableCell>
                  <TableCell key={nanoid()} align="center">
                    user
                  </TableCell>
                  <TableCell key={nanoid()} align="center">
                    comment
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody key={nanoid()}>
                {arrayClients &&
                  arrayClients.map(({ value, data, comment, user }) => (
                    <TableRow key={nanoid()}>
                      <TableCell key={nanoid()} align="center">
                        {value}
                      </TableCell>
                      <TableCell key={nanoid()} align="center">
                        {data}
                      </TableCell>
                      <TableCell key={nanoid()} align="center">
                        {user}
                      </TableCell>
                      <TableCell key={nanoid()} align="center">
                        {comment}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Root>
    </>
  );
}
