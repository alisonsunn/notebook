import React, { useState } from 'react';
import Modal from 'react-modal';
import { addNoteHandler } from '../../utils/AddNoteHandler';
import { useEffect } from 'react';
import { editNote } from '../../utils/EditNote';
import { getAllNotes } from '../../utils/GetAllNotes';

export const AddPost = (props) => {
  const { openPanel, setOpenPanel, setNote } = props
  const { isOpen, type, data } = openPanel

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      height: '60%'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (type === 'edit' && data) {
      setTitle(data.title);
      setContent(data.content);
      console.log(type)
    } if (type === 'add') {
      setTitle('');
      setContent('');
      console.log(type)
    }
  }, [type, data]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setOpenPanel({ ...openPanel, isOpen: false })}
      style={customStyles}
      appElement={document.getElementById('root')}
    >

      {/* Title Section  */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Content Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          rows="5"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex justify-center">
        <button
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => {
            if (type === 'add') {
              addNoteHandler(title, content, setContent, setTitle, setNote, setOpenPanel)
            } else {
              editNote(title, content, data.id, setOpenPanel, openPanel, getAllNotes, setNote)
              console.log(title, content)
            }
          }
          }
        >
          {type === 'add' ? 'Add' : 'Change'}
        </button>
      </div>
    </Modal>
  );
};
