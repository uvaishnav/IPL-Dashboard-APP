// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {id, name, teamImageUrl} = props
  return (
    <Link to={`/team-matches/${id}`} className="team-card-link-style">
      <li className="team-card-container">
        <div className="team-logo-block">
          <img src={teamImageUrl} alt={name} className="team-logo-img" />
        </div>
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
