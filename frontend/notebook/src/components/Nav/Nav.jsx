import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  return (
    <>
      <div className='flex-box gap-10'>
        <h1 className='nav-font'>NoteBook</h1>
        <div className="flex-box search-box">
          <div className='pr-2 pl-2'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input
            type="text"
            placeholder='Search Notes'
            className="input-box" />
        </div>
      </div>
      <hr></hr>
    </>
  )
}
