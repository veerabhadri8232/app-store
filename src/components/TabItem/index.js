import './index.css'

const TabItem = props => {
  const {TabDetails, updateApps, updateActiveTabId, isActive} = props
  const {displayText, tabId} = TabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTab = () => {
    updateApps(tabId)
  }

  return (
    <li className="tab-container">
      <button
        type="button"
        onClick={onClickTab}
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
