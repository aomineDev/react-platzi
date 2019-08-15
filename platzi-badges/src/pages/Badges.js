import React from 'react'
import { Link } from 'react-router-dom'

import BadgesList from '../components/BadgesList'
import api from '../api'
import PageLoading from '../components/shared/PageLoading'
import MiniLoader from '../components/shared/MiniLoader'
import PageError from '../components/shared/PageError'

import './styles/Badges.css'

import header from '../images/platziconf-logo.svg'

class Badges extends React.Component {

  constructor(props) {
    super(props)
    console.log('1. contructor')

    this.state = {
      loading: true,
      error: null,
      data: undefined
    }
  }

  componentDidMount() {
    console.log('3. component Did mount')

    // this.timeOut = setTimeout(() => {
    //   this.setState({
    //     data: [...]
    //   })
    // }, 3000)

    this.fetchData()

    this.interval = setInterval(this.fetchData, 5000)

  }

  fetchData = async () => {
    this.setState({loading: true, error: null})
    try {
      const data = await api.badges.list()
    this.setState({
      loading: false,
      data
    })
    }catch(error) {
      this.setState({loading: false, error})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate')
    console.log({
      prevProps: prevProps, prevState: prevState
    })

    console.log({
      props: this.props, state: this.state
    })
  }

  componentWillUnmount() {
    console.log('6. component will Unmount')
    // clearTimeout(this.timeOut)
    clearInterval(this.interval)
  }

  render() {
    console.log('2/4. render')

    return (
      <React.Fragment>
        <div className="Badges__hero">
          <div className="Badges__container">
            <img
              src={header}
              alt="header"
              className="Badges_conf-logo"
            />
          </div>
        </div>

        {this.state.loading && !this.state.data ? <PageLoading /> : (
         <React.Fragment>
            {this.state.error ? <PageError error={this.state.error} /> : (
            <div className="Badges__container">
              <div className="Badges__buttons">
                <Link to="/badges/new" className="btn btn-platzi">New Badge</Link>
              </div>
  
              <BadgesList badges={this.state.data} />

              {this.state.loading && (
                <MiniLoader />
              )}
            </div>
          )}
         </React.Fragment>
        )}   

      </React.Fragment>
    )
  }
}

export default Badges