import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'

import logo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

function Home(){
  return (
    <div className="Home">
      <div className="Home__wrapper">
        <div className="Home__content">
          <img src={logo} alt="logo" />
          <div className="Home__content-text">
            <h1 className="pt-4">print your badges</h1>
            <p>The easient way to manage your<br />conference</p>
            <div className="Home__content-btn">
              <Link to="/badges" className="btn btn-platzi px-5">Start now</Link>
            </div>
          </div>
        </div>
        <img
          src={astronauts}
          alt="astronauts"
          className="Home__astronauts"
        />
      </div>
    </div>
  ) 
}

export default Home