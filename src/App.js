import React, { Component } from "react";
// import Form from './components/Form'
import Employee from "./components/Employee";
import Axios from "axios";

class App extends Component {
  state = {
    last_name: "",
    employees: [],
  };
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   let employees = JSON.parse(JSON.stringify(this.state.employees));

  //   employees.push({
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     email: this.state.email,
  //     id: this.state.id,
  //   });

  //   this.setState({
  //     employees,
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     id: "",
  //   });
  // };
  componentDidMount() {
    Axios.get("/users.json")
      .then(({ data }) => {
        console.log(data);
        this.setState({ employees: data });
      })
      .catch((err) => console.error(err));
  }
  sortByLastNameA() {
    this.setState({
      employees: this.state.employees.sort((employee, employee2) => {
        if (employee.last_name < employee2.last_name) {
          return -1;
        } else if (employee.last_name > employee2.last_name) {
          return 1;
        } else {
          return 0;
        }
      }),
    })
  }
  sortByLastNameD() {
    this.setState({
      employees: this.state.employees.sort((employee, employee2) => {
        if (employee.last_name < employee2.last_name) {
          return 1;
        } else if (employee.last_name > employee2.last_name) {
          return -1;
        } else {
          return 0;
        }
      }),
    })
  }

  render() {
    return (
      <>
      <p>
        <button onClick={() => this.sortByLastNameA()}>Sort by last name ascending</button>
      </p>
      <p>
        <button onClick={() => this.sortByLastNameD()}>Sort by last name descending</button>
      </p>
      <label htmlFor="filter">Filter by Last Name: </label>
      <input type="text" 
      value={this.state.last_name} 
      onChange={e => this.setState({last_name: e.target.value})} />
        {/* <Form
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          id={this.state.id}

          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        /> */}
        <table>
          <thead>
            <tr>
              <th>
                First Name
              </th>
              <th>
                Last Name
              </th>
              <th>
                Email
              </th>
              <th>
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.filter(employee => {
              return employee.last_name.toUpperCase().includes(this.state.last_name.toUpperCase())
            }).map((employee) => (
              <Employee key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
