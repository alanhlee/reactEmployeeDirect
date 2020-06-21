import React, { Component } from "react";
import Form from './components/Form'

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
      firstName: this.state.name,
      lastName: this.state.movie,
      email: this.state.song,
      id: this.state.food,
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
      <Form />
        <h1>hello world</h1>
      </>
    );
  }
}

export default App;
