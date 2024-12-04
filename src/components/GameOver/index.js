import {Component} from 'react'
import './index.css'

class GameOver extends Component {
  render() {
    const {score, changeGameOver} = this.props
    return (
      <div className="gameover-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
        <p className="score-txt">Your Score</p>
        <p className="score-txt">{score}</p>
        <button
          className="play-again-btn"
          onClick={changeGameOver}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-img"
          />
          PLAY AGAIN
        </button>
      </div>
    )
  }
}

export default GameOver
