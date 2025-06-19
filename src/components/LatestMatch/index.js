import './index.css'

const getResultClass = result => {
  const lowerResult = result.toLowerCase()
  let matchResult = ''
  if (lowerResult.includes('won') || lowerResult.includes('win')) {
    matchResult = 'result-win'
  } else if (lowerResult.includes('lost') || lowerResult.includes('lose')) {
    matchResult = 'result-loss'
  }
  return matchResult
}

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const matchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInning: latestMatchDetails.first_innings,
    secondInning: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  const competingAlt = `latest match ${matchDetails.competingTeam}`

  return (
    <div className="latest-match-card">
      <div className="card-border">
        <div className="card-content">
          {/* Left Section */}
          <div className="left-section">
            <p className="team-name">{matchDetails.competingTeam}</p>
            <p className="match-date">{matchDetails.date}</p>
            <div className="match-info">
              <p className="venue-info">{matchDetails.venue}</p>
              <p
                className={`status-info ${getResultClass(
                  matchDetails.matchStatus,
                )}`}
              >
                {matchDetails.matchStatus}
              </p>
            </div>
          </div>

          {/* Center Logo */}
          <div className="center-section">
            <div className="logo-wrapper">
              <img
                src={matchDetails.competingTeamLogo}
                alt={competingAlt}
                className="team-logo"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <div className="innings-info">
              <h3>First Innings</h3>
              <p className="score">{matchDetails.firstInning}</p>
            </div>
            <div className="innings-info">
              <h3>Second Innings</h3>
              <p className="score">{matchDetails.secondInning}</p>
            </div>
            <div className="motm-info">
              <h3>Man Of The Match</h3>
              <p className="motm-name">{matchDetails.manOfTheMatch}</p>
            </div>
            <div className="umpire-info">
              <h3>Umpires</h3>
              <p className="umpire-names">{matchDetails.umpires}</p>
            </div>
          </div>
        </div>

        {/* Result Banner */}
        <div className="result-banner">
          <p className="result-text">{matchDetails.result}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
