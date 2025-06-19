// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchData: [],
    teamId: '',
    isLoading: true,
  }

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({teamId: id})

    this.getTeamMatchDetails(id)
  }

  getTeamMatchDetails = async id => {
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const teamMatchData = await response.json()

    this.setState({
      teamMatchData,
      isLoading: false,
    })
  }

  render() {
    const {teamMatchData, teamId, isLoading} = this.state
    const background = `team-matches-main-container ${teamId}-gradient`
    return (
      <div className={background}>
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader
              type="Oval"
              color="#ffffff"
              height={50}
              width={50}
              className="match-spinner"
            />{' '}
          </div>
        ) : (
          <>
            <div className="team-banner-container">
              <img
                src={teamMatchData.team_banner_url}
                alt="team banner"
                className="team-banner-img"
              />
            </div>
            <h1>Latest Matches</h1>
            <LatestMatch
              latestMatchDetails={teamMatchData.latest_match_details}
            />
            <ul className="recent-match-cards-container">
              {teamMatchData.recent_matches.map(eachMatch => (
                <MatchCard key={eachMatch.id} recentMatchData={eachMatch} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
