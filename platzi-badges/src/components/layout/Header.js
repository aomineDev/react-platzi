import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Header.css'
import logo from '../../images/logo.svg'
import platzi from '../../images/platzi.webp'


class Header extends React.Component {
  render(){
    return (
      <header className="Header">
        <div className="Navbar">
          <div className="container-fluid Navbar__wrapper">
            <a
              href="https://platzi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="Navbar__brand"
            >
              <img
                src={platzi}
                alt="imagen de la conferencia"
                className="Navbar__brand-logo"
              />
            </a>
            <ul className="Navbar__content list-unstyled mb-0">
              <li className="Navbar__content-item font-weight-bold">Clases</li>
              <li className="Navbar__content-item font-weight-bold">Blog</li>
              <li className="Navbar__content-item font-weight-bold">Foro</li>
              <li className="Navbar__content-item font-weight-bold">Agenda</li>
              <li className="Navbar__content-item font-weight-bold">TV</li>
              <li className="Navbar__content-item">
                <button className="btn btn-platzi">Inicia seción</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="Banner">
        <div className="container-fluid">
          <Link to="/" className="Banner__brand">
            <img
              src={logo}
              alt="imagen de la conferencia"
              className="Banner__brand-logo"
            />
            <span className="Banner__brand-title">Conference</span>
            <span className="font-weight-bold pl-1">badges</span>
          </Link>
        </div>
      </div>
      </header>
    )
  }
}

export default Header