import React from 'react';
import Modal from 'react-modal';

export const AddPost = (props) => {

  const {openPanel, setOpenPanel} = props

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

  return (
    <Modal
      isOpen={openPanel}
      onRequestClose={() => setOpenPanel(false)} 
      style={customStyles}
      appElement={document.getElementById('root')}
      >

      {/* Title Section  */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input 
          type="text" 
          placeholder="Title" 
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Content Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea 
          rows="5" 
          placeholder="Content" 
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex justify-center">
        <button 
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          ADD
        </button>
      </div>
    </Modal>
  );
};
