import React from 'react'

export const DropdownItem = ({item, active, onSelectItem}) => {
  return (
    <li className={active ? 'active' : undefined}>
      <a href="#" onClick={() => onSelectItem(item)}>
        {item}
      </a>
    </li>
  )
}
