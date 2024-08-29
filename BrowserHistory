 //BrowserHistory//
//index.js//

import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: this.props.historyList,
  }

  deleteHistoryItem = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(item => item.id !== id)
    this.setState({historyList: updatedHistoryList})
  }

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(item => item.id !== id)
    this.setState({historyList: updatedHistoryList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const filteredHistoryList = historyList.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="browser-history-app">
        <div className="search-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.onSearchInputChange}
            />
          </div>
        </div>
        <div className="history-container">
          {filteredHistoryList.length > 0 ? (
            <ul className="history-list">
              {filteredHistoryList.map(item => (
                <HistoryItem
                  key={item.id}
                  historyItem={item}
                  deleteHistoryItem={this.deleteHistoryItem}
                />
              ))}
            </ul>
          ) : (
            <p className="empty-history">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory

//index.css//

.browser-history-app {
  font-family: 'Roboto', sans-serif;
  background-color: #f8fafc;
  min-height: 100vh;
  padding: 20px;
}

.search-bar {
  display: flex;
  align-items: center;

  background-color: #3367d6;
  padding: 10px;
}

.app-logo {
  height: 30px;
  align-items: flex-start;
}

.search-container {
  display: flex;
  align-items: center;
  background-color: #3367d6;
  border-radius: 5px;
  padding: 5px;
  justify-content: center;
  align-self: center;
}

.search-icon {
  height: 20px;
  margin-right: 5px;
  background-color: #2850a7;
}

.search-input {
  border: none;
  outline: none;
  padding: 5px;
  background: #2850a7;
  color: white;
}

.empty-history {
  text-align: center;
  color: #64748b;
}


