// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

const url = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch(url)
    const teams = await response.json()
    const teamsList = teams.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({
      teamsList,
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="ipl-dashboard-home-container">
        <div className="ipl-name-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-head"
            loading="eager"
            decoding="async"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader
              type="Oval"
              color="#ffffff"
              height={50}
              width={50}
              className="spinner"
            />
          </div>
        ) : (
          <ul className="ipl-teams-container">
            {teamsList.map(eachTeam => (
              <TeamCard
                key={eachTeam.id}
                id={eachTeam.id}
                name={eachTeam.name}
                teamImageUrl={eachTeam.teamImageUrl}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
