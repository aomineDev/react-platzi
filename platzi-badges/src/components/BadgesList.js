import React from 'react'
import { Link } from 'react-router-dom' 

import BadgesListItem from './BadgesListItem'
import BadgeSearch from './BadgeSearch'

import './styles/BadgesList.css'

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('')
  const [filteredBadges, setFilteredBadges] = React.useState(badges)
   React.useMemo(() => {
      const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
      })

      setFilteredBadges(result)
    },
    [ badges, query ]
  )

  return { query, setQuery, filteredBadges }
}

function BadgesList(props) {

  const badges = props.badges
  const { query, setQuery, filteredBadges } = useSearchBadges(badges)

  if(filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <BadgeSearch
          query={query}
          onChangeQuery={(e) => {
            setQuery(e.target.value)
          }}
        />
        <h3>No badges were found</h3>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>

      <BadgeSearch
        query={query}
        onChangeQuery={(e) => {
          setQuery(e.target.value)
        }}
       />
      
      <ul className="list-unstyled BadgesList">
        {filteredBadges.map(badge => {
          return (
            <Link
              to={`badges/${badge.id}`}
              className="text-decoration-none"
              key={badge.id}
            >
              <BadgesListItem badge={badge} />
            </Link>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default BadgesList