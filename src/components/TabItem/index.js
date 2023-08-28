import './index.css'

const TabItem = props => {
  const {tabDetails, updatedTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const ChnagingTheTab = () => {
    updatedTabId(tabId)
  }

  const activeTab = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTab}`}
        onClick={ChnagingTheTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
