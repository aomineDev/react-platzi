import React from 'react'
import Swal from 'sweetalert2'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import PageError from '../components/shared/PageError'
import PageLoading from '../components/shared/PageLoading'

import './styles/BadgeEdit.css'

import header from '../images/platziconf-logo.svg'

class BadgeEdit extends React.Component {

  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    },
    timer: 1500
  }

  componentDidMount() {
    this.badgeId = this.props.match.params.badgeId
    this.fetchData()
  }

  async fetchData() {
    try {
      this.setState({ loading: true, error: null })

      const data = await api.badges.read(this.badgeId)
      this.setState({
        loading: false,
        form: data
      })
      
    } catch (error) {
      this.setState({ loading: false, error })
    }
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
              await api.badges.update(this.badgeId, this.state.form)
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
            title: 'Your badge has been updated',
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
    if(this.state.loading ) {
      return <PageLoading />
    }

    if(this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <React.Fragment>

        <div className="BadgeEdit__hero">
          <div className="BadgeEdit__container">
            <img
              src={header}
              alt="estrellas"
              className="img-fluid BadgeEdit__hero-logo"
            />
          </div>
        </div>

        <div className="BadgeEdit__container">
          <div className="BadgeEdit__wrapper">
            <div className="BadgeEdit__wrapper-item">
              <Badge
                firstName={this.state.form.firstName || 'FIRST NAME'}
                lastName={this.state.form.lastName || 'LAST NAME'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                twitter={this.state.form.twitter || 'Twitter'}
                email={this.state.form.email}
                avatarUrl="https://i.imgur.com/5NWfnL8.jpg"
              />
            </div>
            <div className="BadgeEdit__wrapper-item">
              <h2 className="form__title">Edit Attendant</h2>
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

export default BadgeEdit