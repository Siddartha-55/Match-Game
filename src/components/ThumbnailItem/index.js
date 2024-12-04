import {Component} from 'react'
import './index.css'

class Categories extends Component {
  render() {
    const {imageItem, checkMatchWithImage} = this.props
    const thumbnailClicked = () => {
      checkMatchWithImage(imageItem.id)
    }
    return (
      <li>
        <button
          className="thumbnail-item"
          type="button"
          onClick={thumbnailClicked}
        >
          <img
            src={imageItem.thumbnailUrl}
            alt="thumbnail"
            className="thumbnail-image"
          />
        </button>
      </li>
    )
  }
}

export default Categories
