import {Component} from 'react'
import NavBar from '../NavBar'
import ThumbnailItem from '../ThumbnailItem'
import Categories from '../Categories'
import GameOver from '../GameOver'
import './index.css'

let dataLists

class MatchGame extends Component {
  state = {
    activeCategory: 'FRUIT',
    score: 0,
    imageIndex: Math.floor(Math.random() * 30),
    gameOver: false,
    timeDuration: 60,
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        timeDuration: prevState.timeDuration - 1,
      }))
    }, 1000)
  }

  changeActiveCategory = tabId => {
    this.setState({
      activeCategory: tabId,
    })
  }

  checkMatchWithImage = imgId => {
    const {imageIndex} = this.state
    const imageItem = dataLists.imagesList[imageIndex]
    if (imageItem.id === imgId) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        imageIndex: Math.floor(Math.random() * 30),
      }))
    } else {
      this.setState({
        gameOver: true,
      })
      clearInterval(this.timerId)
    }
  }

  changeGameOver = () => {
    this.setState({
      gameOver: false,
      score: 0,
      timeDuration: 60,
    })
    this.componentDidMount()
  }

  updateGameOver = () => {
    this.setState({
      timeDuration: 0,
      gameOver: true,
    })
  }

  render() {
    const {
      activeCategory,
      score,
      imageIndex,
      gameOver,
      timeDuration,
    } = this.state
    dataLists = this.props
    const {tabsList, imagesList} = dataLists
    const imageItem = imagesList[imageIndex]
    const {imageUrl} = imageItem
    const filteredImagesList = imagesList.filter(
      eachItem => eachItem.category === activeCategory,
    )
    if (timeDuration === 1) {
      clearInterval(this.timerId)
      this.updateGameOver()
    }
    let mainDisplayContent
    if (gameOver) {
      mainDisplayContent = (
        <GameOver score={score} changeGameOver={this.changeGameOver} />
      )
    } else {
      mainDisplayContent = (
        <div className="sub-container">
          <div>
            <img src={imageUrl} alt="match" className="match-image" />
          </div>
          <ul className="tabs-list">
            {tabsList.map(eachItem => (
              <Categories
                tabItem={eachItem}
                key={eachItem.tabId}
                changeActiveCategory={this.changeActiveCategory}
                isActive={activeCategory === eachItem.tabId}
              />
            ))}
          </ul>
          <ul className="thumbnails-list">
            {filteredImagesList.map(eachItem => (
              <ThumbnailItem
                imageItem={eachItem}
                key={eachItem.id}
                checkMatchWithImage={this.checkMatchWithImage}
              />
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <NavBar score={score} timeDuration={timeDuration} />
        {mainDisplayContent}
      </div>
    )
  }
}

export default MatchGame
