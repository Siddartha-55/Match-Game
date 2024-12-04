import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, timeDuration} = this.props
    return (
      <nav>
        <ul className="navbar">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="nav-logo"
            />
          </li>
          <li className="score-container">
            <p>
              Score: <span className="score-styling">{score}</span>
            </p>
            <p className="score-styling">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-img"
              />
              {timeDuration} sec
            </p>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
