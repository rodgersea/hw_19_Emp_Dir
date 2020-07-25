import React, { Component } from "react";
import "./style.css";
import emp_Base from "../utils/employees.json";
import Wrapper from "../components/Wrapper.js";
import Header from "../components/Header.js";
import EmployeeCard from "../components/EmployeeCard.js";

let emp_Based = emp_Base.results;
let i;
for (i=0; i < emp_Based.length; i++) {
  emp_Based[i].name = emp_Based[i].name.title + ' ' + emp_Based[i].name.first + ' ' + emp_Based[i].name.last;
  emp_Based[i].name1 = emp_Based[i].name.toLowerCase();
  console.log(emp_Based[i].name1);
};
// emp_Based = emp_Based.results;
console.log('emp_Based', emp_Based);

class Form extends Component {
  // Setting the component's initial state
  state = {
    emp_Filter: "",
    emp_Basee: emp_Based
  };
   
  handleInputChange = event => {
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
    this.handleFilter(value);
  };

  handleFilter = hold => {
    this.setState({
      emp_Basee: emp_Based.filter(x => x.name1.includes(hold))
    })
  }

  render() {
    return (
      <Wrapper>
        <Header>results matching: {this.state.emp_Filter}</Header>
        <form className="form">
          <input
            value={this.state.emp_Filter}
            name="emp_Filter"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Filter"
          />
        </form>
        {this.state.emp_Basee.map(employee => (
          <EmployeeCard
            key={employee.registered.date}
            name={employee.name}
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
