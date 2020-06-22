import React from "react";

const Employee = (props) => {
  // console.log(props.employee);
  return (
    <tr>
      <td>{props.employee.first_name}</td>
      <td>{props.employee.last_name}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.id}</td>
    </tr>
  );
};

export default Employee;
