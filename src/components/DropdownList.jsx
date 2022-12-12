import React from 'react'
import {DropdownItem} from './DropdownItem'
import {useState} from 'react'

export const DropdownList = ({toggleList}) => {
  const list = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out'
  ]
  const [activeItem, setActiveItem] = useState('')
  const selectItem = (item) => {
    toggleList()
    setActiveItem(item)
  }

  return (
    <>
      {list.map((li, ind) => (
        <DropdownItem
          key={ind}
          item={li}
          active={activeItem === li ? true : false}
          onSelectItem={selectItem}
        />
      ))}
    </>
  )
}
