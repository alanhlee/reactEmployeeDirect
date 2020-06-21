import React from "react";

const Form = (props) => {
  return (
    <form>
      <p>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={props.handleInputChange}
          value={props.firstName}
        />
      </p>
      <p>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={props.handleInputChange}
          value={props.lastName}
        />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={props.handleInputChange}
          value={props.email}
        />
      </p>
      <p>
        <label htmlFor="id">Id</label>
        <input
          type="text"
          name="id"
          id="id"
          onChange={props.handleInputChange}
          value={props.id}
        />
      </p>
      <button onClick={props.handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
