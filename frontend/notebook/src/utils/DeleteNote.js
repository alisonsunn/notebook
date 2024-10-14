import { getAllNotes } from "./GetAllNotes";

export const deleteNote = async (title, setNote) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/delete-note?title=${encodeURIComponent(title)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (response.status === 201) {
      const data = await response.json();
      alert('Note deleted successfully!');
      console.log(data.deletedNote)
      getAllNotes(setNote)
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error(error)
  }
}