import React, { Component } from "react";
import Form from './components/Form'
import Employee from './components/Employee'


class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    id: 0,
    employees: [],
  };
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    let employees = JSON.parse(JSON.stringify(this.state.employees));

    employees.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      id: this.state.id,
    });

    this.setState({
      employees,
      firstName: "",
      lastName: "",
      email: "",
      id: ""
    })
  };
  render() {
    return (
      <>
        <Form
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          id={this.state.id}

          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.employees.map((employee) => (
          <Employee employee={employee} />
        ))}
      </>
    );
  }
}

export default App;
