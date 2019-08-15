import React from 'react'
import Swal from 'sweetalert2'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'


import './styles/BadgeNew.css'

import header from '../images/platziconf-logo.svg'

class BadgeNew extends React.Component {

  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    },
    timer: 1500
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
      e.preventDefault()

        Swal.fire({
          title: 'Loading...',
          allowOutsideClick: false,
          onBeforeOpen: async () => {
            try {
              Swal.showLoading()
              await api.badges.create(this.state.form)
              this.setState({
                form: {
                  firstName: '',
                  lastName: '',
                  jobTitle: '',
                  twitter: '',
                  email: ''
                }
              })
              Swal.close()
            } catch (error) {
              Swal.fire({
                type: 'error',
                title: 'Error',
                text: error,
                showConfirmButton: false,
                timer: 1500
              })
            }
            
          }
        })
        .then(() => {
          Swal.fire({
            type: 'success',
            title: 'Your badge has been saved',
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: this.state.timer
          })
        })
        .then(() => {
          setTimeout(() => {
            this.props.history.push('/badges')
          }, this.state.timer)
        })
      
    }

  render() {
    return (
      <React.Fragment>

        <div className="BadgeNew__hero">
          <div className="BadgeNew__container">
            <img
              src={header}
              alt="estrellas"
              className="img-fluid BadgeNew__hero-logo"
            />
          </div>
        </div>

        <div className="BadgeNew__container">
          <div className="BadgeNew__wrapper">
            <div className="BadgeNew__wrapper-item">
              <Badge
                firstName={this.state.form.firstName || 'FIRST NAME'}
                lastName={this.state.form.lastName || 'LAST NAME'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                twitter={this.state.form.twitter || 'Twitter'}
                email={this.state.form.email}
                avatarUrl="https://i.imgur.com/5NWfnL8.jpg"
              />
            </div>
            <div className="BadgeNew__wrapper-item">
              <h2 className="form__title">New Attendant</h2>
              <BadgeForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

export default BadgeNew