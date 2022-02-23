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

export function ColumnGroupingTable({ objectCity, handleOpen }) {
  const years = ['2017', '2018', '2019'];
  return (
    <>
      <Root key={nanoid()}>
        <Paper key={nanoid()} sx={{ width: '100%' }}>
          <TableContainer key={nanoid()} sx={{ maxHeight: 740 }}>
            <Table key={nanoid()} stickyHeader aria-label="sticky table">
              <TableHead key={nanoid()}>
                <TableRow key={nanoid()}>
                  <TableCell
                    key={nanoid()}
                    align="center"
                    rowSpan={2}
                    colSpan={1}
                  >
                    regions
                  </TableCell>
                  {years.map(year => (
                    <TableCell key={nanoid()} align="center" colSpan={3}>
                      {year}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow key={nanoid()}>
                  <TableCell key={nanoid()} align="center" colSpan={1}>
                    XX
                  </TableCell>
                  <TableCell key={nanoid()} align="center" colSpan={1}>
                    YY
                  </TableCell>
                  <TableCell key={nanoid()} align="center" colSpan={1}>
                    ZZ
                  </TableCell>
                  <TableCell key={nanoid()} align="center" colSpan={1}>
                    XX
                  </TableCell>
                  <TableCell key={nanoid()} align="center" colSpan={1}>
                    YY
                  </TableCell>
                  <TableCell key={nanoid()} align="center" colSpan={1}>
                    ZZ
                  </TableCell>
                  <TableCell key={nanoid()} align="center" colSpan={1}>
                    XX
                  </TableCell>
                  <TableCell key={nanoid()} align="center" colSpan={1}>
                    YY
                  </TableCell>
                  <TableCell key={nanoid()} align="center" colSpan={1}>
                    ZZ
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody key={nanoid()}>
                {Object.keys(objectCity).map(city => {
                  return (
                    <TableRow key={nanoid()} onClick={() => handleOpen()} hover>
                      <TableCell key={nanoid()}> {city}</TableCell>
                      {years.map(year =>
                        objectCity[city].G[year] ? (
                          <>
                            <TableCell key={nanoid()}>
                              {objectCity[city].G[year].XX.value}
                            </TableCell>
                            <TableCell key={nanoid()}>
                              {objectCity[city].G[year].YY.value}
                            </TableCell>
                            <TableCell key={nanoid()}>
                              {objectCity[city].G[year].ZZ.value}
                            </TableCell>
                          </>
                        ) : (
                          <>
                            <TableCell key={nanoid()}>-</TableCell>
                            <TableCell key={nanoid()}>-</TableCell>
                            <TableCell key={nanoid()}>-</TableCell>
                          </>
                        )
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Root>
    </>
  );
}
