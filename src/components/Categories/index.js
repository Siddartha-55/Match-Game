import {Component} from 'react'
import './index.css'

class Categories extends Component {
  render() {
    const {tabItem, changeActiveCategory, isActive} = this.props
    const {tabId, displayText} = tabItem
    const changeCategory = () => {
      changeActiveCategory(tabId)
    }
    const activeStyling = isActive ? 'active' : ''
    return (
      <li>
        <button
          onClick={changeCategory}
          className={`tab-item ${activeStyling}`}
          type="button"
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default Categories
