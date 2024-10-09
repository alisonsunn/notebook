import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import { Note } from '../../components/Note/Note'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddPost } from '../../components/AddPost/AddPost';
import { useState } from 'react';

export const Home = () => {

  // control the Panel
  const [openPanel, setOpenPanel] = useState(false);

  const showPanel = () => {
    setOpenPanel(!openPanel)
  }

  return (
    <>
      <Nav></Nav>
      <div 
        className='grid grid-cols-4 grid-flow-row gap-3 p-4'>
        <Note></Note>
      </div>
      <AddPost openPanel={openPanel} setOpenPanel={setOpenPanel} showPanel={showPanel} ></AddPost>
      <div 
        className='rounded-full bg-purple-200 w-20 h-20 flex justify-center items-center fixed bottom-8 right-8 ' onClick={showPanel}>
        <FontAwesomeIcon icon={faPlus} className='w-10 h-10 text-white ' />
      </div>
    </>
  )
}
