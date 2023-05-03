import React, { Component, Fragment } from 'react'

class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      disabledSave : true,
      closeEnterSalary: true,
      salary: ''
    };
  }

  componentDidMount(){
    
  }

  enterSalary(){
    this.setState({
      closeEnterSalary: false
    })
  }

  onChangeSalaryText(value){
    this.setState({
      salary: value,
    })
    if(this.props.employee.salary != value){
      this.setState({
        disabledSave: false,
      })
    }else if(this.props.employee.salary == value){
      this.setState({
        disabledSave: true,
      })
    }
  }

  saveBtn(){
    this.setState({
      disabledSave : true,
      closeEnterSalary: true,
    })
    this.props.saveBtn(this.state.salary);
  }

  render() {
    return (
      <Fragment>
        <td>{this.props.employee.name}</td>
        <td className='pl-20'>{this.props.employee.position}</td>
        <td className='pl-20' onClick={()=>this.enterSalary()}>
        {
          this.state.closeEnterSalary ? (
            <div
              data-testid={'employee-salary-div-' + this.props.idx}
            >
              {this.props.employee.salary}
            </div>
          )
          :
          (
            /* use this block of code when the salary field becomes editable */
            <input
                data-testid={ 'employee-salary-input-' + this.props.idx }
                type='number'
                value={this.state.salary}
                onChange={(e) => {
                  this.onChangeSalaryText(e.target.value);
                }}
            /> 
          )
        }
        </td>
        <td className='pl-20'>
          <button
            className={ 'x-small w-75 ma-0 px-25' }
            data-testid={ 'employee-save-button-' + this.props.idx }
            disabled = {this.state.disabledSave}
            onClick={()=>this.saveBtn()}
          >
            Save
          </button>
        </td>
      </Fragment>
    )
  }
}


export default Employee
