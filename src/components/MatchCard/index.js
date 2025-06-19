// Write your code here
import './index.css'
import {formatDate} from '../common'

const MatchCard = props => {
  const {recentMatchData} = props
  const matchDetails = {
    result: recentMatchData.result,
    date: recentMatchData.date,
    competingTeam: recentMatchData.competing_team,
    competingTeamLogo: recentMatchData.competing_team_logo,
    matchStatus: recentMatchData.match_status,
  }
  const statusClass = matchDetails.matchStatus.toLowerCase().includes('won')
    ? 'result-won'
    : 'result-lost'

  const competingAlt = `competing team ${matchDetails.competingTeam}`

  return (
    <li className={`match-card-main-component ${statusClass}`}>
      <div className="opponent-container">
        <img
          src={matchDetails.competingTeamLogo}
          alt={competingAlt}
          className="opponent-logo"
          loading="lazy"
        />
        <p className="opponent-name">{matchDetails.competingTeam}</p>
      </div>
      <div className="match-summary-container">
        <p className="match-detail-date">{formatDate(matchDetails.date)}</p>
        <p className="match-card-result">{matchDetails.result}</p>
        <p className={`match-card-status ${statusClass}`}>
          {matchDetails.matchStatus}
        </p>
      </div>
    </li>
  )
}

export default MatchCard
