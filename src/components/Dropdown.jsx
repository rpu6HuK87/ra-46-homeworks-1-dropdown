import React, {useState} from 'react'
import {DropdownList} from './DropdownList'

export const Dropdown = () => {
  const [showList, setShowList] = useState(false)

  const toggleList = () => {
    setShowList(!showList)
  }

  return (
    <div>
      <div className={showList ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
        <button className="btn" onClick={() => toggleList()}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <ul className="dropdown">
          <DropdownList toggleList={toggleList} />
        </ul>
      </div>
    </div>
  )
}
