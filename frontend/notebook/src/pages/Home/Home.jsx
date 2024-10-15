import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import { Note } from '../../components/Note/Note'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddPost } from '../../components/AddPost/AddPost';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllNotes } from '../../utils/GetAllNotes';

export const Home = () => {

  // control the Panel
  const [openPanel, setOpenPanel] = useState({
    isOpen: false,
    type: "add",
  });


  const showAddPanel = () => {
    setOpenPanel({...openPanel, isOpen: !openPanel.isOpen, type: "add"})
  }

  const showEditPanel = (note) => {
    setOpenPanel({...openPanel, isOpen: !openPanel.isOpen, type: "edit", data: note})
  }

  // update the notes
  const [note, setNote] = useState([]);

  useEffect(() => {
    getAllNotes(setNote)
  },[]);

  return (
    <>
      <Nav></Nav>
      <div 
        className='grid grid-cols-4 grid-flow-row gap-3 p-4'>
        {note.map((each) => <Note key={each.id} id={each.id} title={each.title} content={each.content}time={each.createdAt} note={each} setNote={setNote} showEditPanel={showEditPanel}></Note>)}
      </div>
      <AddPost openPanel={openPanel} setOpenPanel={setOpenPanel} showPanel={showAddPanel} setNote={setNote} ></AddPost>
      <div 
        className='rounded-full bg-purple-200 w-20 h-20 flex justify-center items-center fixed bottom-8 right-8 ' onClick={showAddPanel}>
        <FontAwesomeIcon icon={faPlus} className='w-10 h-10 text-white ' />
      </div>
    </>
  )
}
