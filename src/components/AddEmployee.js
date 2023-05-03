import React, { Component, Fragment } from 'react'

class AddEmployee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      disabledAddBtn: true,
      name: '',
      position: '',
      salary: ''
    };
  }

  componentDidMount(){
    
  }

  onChangeText(param, value){
    this.setState({
      [param]: value
    })
    if(this.state.name && this.state.position && this.state.salary){
      this.setState({
        disabledAddBtn: false,
      })
    }
  }

  addBtn(){
    this.setState({
      name: '',
      position: '',
      salary: ''
    })
    this.props.addBtn(this.state.name, this.state.position, this.state.salary);
  }

  render() {
    return (
      <Fragment>
        <td className='pl-30' >
          <input
            data-testid='new-employee-name-input'
            placeholder='Enter Name'
            value={this.state.name}
            onChange={(e) => {
              this.onChangeText("name", e.target.value);
            }}
          />
        </td>
        <td className='pl-20'>
          <input
            data-testid='new-employee-position-input'
            placeholder='Enter Position'
            value={this.state.position}
            onChange={(e) => {
              this.onChangeText("position", e.target.value);
            }}
          />
        </td>
        <td className='pl-20'>
          <input
            data-testid='new-employee-salary-input'
            type='number'
            placeholder='Enter Salary'
            value={this.state.salary}
            onChange={(e) => {
              this.onChangeText("salary", e.target.value);
            }}
          />
        </td>
        <td className='pl-20'>
          <button
            data-testid='add-new-employee-button'
            className='x-small w-75 ma-0 px-25'
            disabled={this.state.disabledAddBtn}
            onClick={()=>this.addBtn()}
          >
            Add
          </button>
        </td>
      </Fragment>
    )
  }
}

export default AddEmployee
