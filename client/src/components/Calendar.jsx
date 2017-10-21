import React from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const MonthlyCalendar = (props) => {
  

  return(
    <BootstrapTable data={events} striped hover>
      <TableHeaderColumn>Sunday</TableHeaderColumn>
      <TableHeaderColumn>Monday</TableHeaderColumn>
      <TableHeaderColumn>Tuesday</TableHeaderColumn>
      <TableHeaderColumn>Wednesday</TableHeaderColumn>
      <TableHeaderColumn>Thursday</TableHeaderColumn>
      <TableHeaderColumn>Friday</TableHeaderColumn>
      <TableHeaderColumn>Saturday</TableHeaderColumn>
    </BootstrapTable>
  );
};
