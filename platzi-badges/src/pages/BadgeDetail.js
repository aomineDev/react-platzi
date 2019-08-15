import React from 'react'
import { Link } from 'react-router-dom'

import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

import './styles/BadgeDetail.css'
import header from '../images/platziconf-logo.svg'

function useIncreaseCount(max) {
  const [ count, setCount ] = React.useState(0)

  if(count > max) {
    setCount(0)
  }

  return [ count, setCount ]

}

export default function BadgeDetail(props) {

  const [ count, setCount ] = useIncreaseCount(4)

  return (
    <React.Fragment>
        <div className="BadgeDetail__hero">
          <div className="BadgeDetail__container">
            <img
              src={header}
              alt="header logo"
              className="BadgeDetail__hero-logo"
            />
            <h2 className="BadgeDetail__title mb-0">{props.badge.firstName} {props.badge.lastName}</h2>
          </div>
        </div>

        <div className="BadgeDetail__content">
          <div className="BadgeDetail__container">
            <Badge
              firstName={props.badge.firstName}
              lastName={props.badge.lastName}
              jobTitle={props.badge.jobTitle}
              twitter={props.badge.twitter}
              email={props.badge.email}
            />
            <div className="BadgeDetail__actions">
              <h2 className="BadgeDetail__actions-title mb-0">Actions:</h2>
              <Link to={`/badges/${props.badge.id}/edit`} className="btn btn-platzi">Edit</Link>
              <button className="btn btn-platziDanger" onClick={props.onOpenModal}>Delete</button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
              <button className="btn btn-primary" onClick={() => {setCount(count + 1)}}>Count++ {count} </button>
            </div>
          </div>
        </div>
      </React.Fragment>
  )
}