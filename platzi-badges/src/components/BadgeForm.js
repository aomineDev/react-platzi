import React from 'react'

import './styles/BadgeForm.css'

class BadgeForm extends React.Component {

  // state = {
  //   jobTitle: 'Developer'
  // }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  handleClick = e => {
    console.log('button was clicked')
  }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   console.log('Form was submit')
  //   console.log(
  //     this.state
  //   )
  // }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="form">
        <div className="form__wrapper">
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              className="form-control mod"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              className="form-control mod"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group-divider"></div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="email"
              className="form-control mod"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              className="form-control mod"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              className="form-control mod"
              value={this.props.formValues.twitter}
            />
          </div>
          <button  onClick={this.handleClick} className="btn btn-primary d-block w-100">Save</button>
        </div>
      </form>
    )
  }
}

export default BadgeForm