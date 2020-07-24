import React, { Component } from "react";
import "./style.css";
import emp_Base from "./../../public/employees.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import EmployeeCard from ".components.EmployeeCard";

class Form extends Component {
  // Setting the component's initial state
  state = {
    emp_Filter: "",
    emp_Base
  };
   
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    const emp_Base = this.state.emp_Base.filter(employee => (employee.name.title + ' ' + employee.name.first + ' ' + employee.name.last).includes(this.value))
    // Updating the input's state
    this.setState({
      [name]: value,
      emp_Base
    });
  };

  render() {
    return (
      <Wrapper>
        <Header>results matching: {this.state.emp_Filter}</Header>
        <form className="form">
          <input
            value={this.state.emp_Filter}
            name="filter"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Filter"
          />
        </form>
        {this.state.emp_Base.map(employee => (
          <EmployeeCard
            name={employee.name.title + ' ' + employee.name.first + ' ' + employee.name.last}
            email={employee.email}
            country={employee.location.country}
            picture={employee.picture.thumbnail}
          />
        ))}
      </Wrapper>
    )
  }
}

export default Form;
