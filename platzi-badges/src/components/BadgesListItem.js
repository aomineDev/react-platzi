import React from 'react'

import Grabatar from './Grabatar'

export default function BadgesListItem(props) {
  return (
    <li className="BadgesList__box">

    <Grabatar
      className="BadgesList__avatar"
      email={props.badge.email}
      alt="avatar"
    />

    <div>
      <div className="font-weight-bold text-dark">{props.badge.firstName} {props.badge.lastName}</div>
      <div className="BadgesList__section-twitter"><i className="fab fa-twitter pr-1"></i>@{props.badge.twitter}</div>
      <div className="BadgesList__section-jobTitle text-dark">{props.badge.jobTitle}</div>
    </div>

    </li>
  )
}