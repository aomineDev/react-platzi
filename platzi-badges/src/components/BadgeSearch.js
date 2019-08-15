import React from 'react'

import './styles/BadgeSearch.css'

export default function BadgeSearch(props) {
  return (
    <div className="form-group BadgeSearch">
      <label>Filter Badges</label>
      <input type="text" className="form-control"
        value={props.query}
        onChange={props.onChangeQuery}
      />
    </div>
  )
}