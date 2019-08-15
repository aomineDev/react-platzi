import React from 'react'

import BadgeDetail from './BadgeDetail'
import api from '../api'
import PageError from '../components/shared/PageError'
import PageLoading from '../components/shared/PageLoading'



export default class BadgeDetailContainer extends React.Component {

  state = {
    loading: true,
    error: null,
    data: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      twitter: '',
      email: ''
    },
    modalIsOpen: false
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
        data
      })

    } catch (error) {
      this.setState({ loading: false, error })
    }
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false })
  }

  handleDeleteBadge = async e => {
    try {
      this.setState({ loading: true, error: null })

      await api.badges.remove(this.badgeId)
      this.setState({
        loading: false
      })

      this.props.history.push('/badges')

    } catch (error) {
      this.setState({ loading: false, error })
    }
  }

  render() {

    if(this.state.loading ) {
      return <PageLoading />
    }

    if(this.state.error) {
      return <PageError error={this.state.error} />
    }

    return  <BadgeDetail
      badge={this.state.data}
      modalIsOpen={this.state.modalIsOpen}
      onCloseModal={this.handleCloseModal}
      onOpenModal={this.handleOpenModal}
      onDeleteBadge={this.handleDeleteBadge}
    />
  }
}