import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteNote } from '../../utils/DeleteNote';


export const Note = (props) => {
  const {title, content, time, setNote, showEditPanel, note, id} = props
  return (
    <div className="bg-white border-2 border-purple-300 rounded-lg shadow-md p-4 max-w-sm relative">

      {/* Header with Emoji and Title */}
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">🎉</span>
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      {/* Date */}
      <div className="text-gray-500 mb-4">
        {time}
      </div>

      {/* Placeholder for the note */}
      <div>{content}</div>

      {/* Edit Section */}
      <div className='flex justify-end gap-5'>
        <FontAwesomeIcon icon={faPenToSquare} className='cursor-pointer' onClick={()=> showEditPanel(note)} />
        <FontAwesomeIcon icon={faTrash} className='cursor-pointer' onClick={() => deleteNote(id, setNote)} />
      </div>

    </div>
  );
}
