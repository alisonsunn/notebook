import { getAllNotes } from "./GetAllNotes";

export const addNoteHandler = async (title, content, setTitle, setContent, setNote, setOpenPanel) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/post-notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });

    const data = await response.json(); 
    if (response.status === 201) {
      alert('Note saved successfully!');
      console.log(data);  
      setTitle('');  
      setContent('');  
      getAllNotes(setNote);
      setOpenPanel(false);
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error('Error:', error);  
  }
};
