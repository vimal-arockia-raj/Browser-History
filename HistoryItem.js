//HistoryItem//
//inde.js//

import React from 'react'

import './index.css'

class HistoryItem extends React.Component {
  onDelete = () => {
    const {historyItem, deleteHistoryItem} = this.props
    deleteHistoryItem(historyItem.id)
  }

  render() {
    const {historyItem} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = historyItem

    return (
      <li className="history-item">
        <div className="history-item-details">
          <p className="history-time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="history-logo" />
          <div className="history-title-url">
            <p className="history-title">{title}</p>
            <p className="history-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={this.onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </li>
    )
  }
}

export default HistoryItem

//index.css//

.history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ececec;
}

.history-item-details {
  display: flex;
  align-items: center;
}

.history-time {
  margin-right: 10px;
  color: #64748b;
}

.history-logo {
  height: 30px;
  margin-right: 10px;
}

.history-title-url {
  display: flex;
  flex-direction: column;
}

.history-title {
  font-size: 16px;
  margin: 0;
  color: #2850a7;
}

.history-url {
  font-size: 14px;
  margin: 0;
  color: #64748b;
}

.delete-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.delete-icon {
  height: 20px;
}

/
