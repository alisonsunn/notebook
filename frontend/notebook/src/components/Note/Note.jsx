import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Note = () => {
  return (
    <div className="bg-white border-2 border-purple-300 rounded-lg shadow-md p-4 max-w-sm relative">

      {/* Header with Emoji and Title */}
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">🎉</span>
        <h2 className="font-bold text-lg">New Post</h2>
      </div>

      {/* Date */}
      <div className="text-gray-500 mb-4">
        Fri Apr 21 2023
      </div>

      {/* Placeholder for the note */}
      <div>Notes</div>

      {/* Edit Section */}
      <div className='flex justify-end gap-5'>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>

    </div>
  );
}
