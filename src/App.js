import React, { Component, Fragment } from 'react'
import 'h8k-components'

import { AddEmployee, Employee } from './components'

const title = 'Editable Table'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employeesList : [
        { id: 0, name: 'Chris Hatch', position: 'Software Developer', salary: 130000 },
        { id: 1, name: 'Elizabeth Montgomery', position: 'Lead Research Engineer', salary: 70000 },
        { id: 2, name: 'Aiden Shaw', position: 'Machine Learning Engineer', salary: 80000 },
      ]
    };
  }

  saveBtn(idx, salray){
    let employeesList = JSON.parse(JSON.stringify(this.state.employeesList));
    employeesList[idx].salary = salray;
    this.setState({
      employeesList: employeesList
    })
  }

  addBtn(name, position, salary){
    let employeesList = JSON.parse(JSON.stringify(this.state.employeesList));
    let one = {
      id: employeesList.length,
      name: name,
      position: position,
      salary: salary
    }
    employeesList.push(one);
    this.setState({
      employeesList: employeesList
    })
  }

  render() {
    return (
      <Fragment>
        <h8k-navbar header={ title }></h8k-navbar>
        <div className="card w-45 mx-auto mt-75 pb-5">
          <table data-testid='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.state.employeesList.map((employee, idx) => (
                  <tr key={ employee.id } data-testid={ `row-${idx}` }>
                    <Employee 
                      idx={ idx } 
                      employee={ employee }
                      saveBtn={(salary)=>{
                        this.saveBtn(idx, salary)
                      }}
                    />
                  </tr>
                ))}
                <tr>
                  <AddEmployee
                    addBtn={(name, position, salary)=>{
                      this.addBtn(name, position, salary)
                    }}
                  />
                </tr>
              </tbody>
            </table>
        </div>
      </Fragment>
    )
  }
}

export default App
