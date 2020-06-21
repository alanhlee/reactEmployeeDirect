import React from "react";

const Employee = (props) => {
  // console.log(props.employee);
  return (
    <>
      <div
        className="card text-white bg-secondary mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">Name: {props.employee.firstName} {props.employee.lastName}</div>
        <div className="card-body">
          <p className="card-text">Email: {props.employee.email}</p>
          <p className="card-text">Id: {props.employee.id}</p>
        </div>
      </div>
    </>
  )
}

export default Employee
