export const getAllNotes = async (setNote) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/get-notes`);
    const data = await response.json();
    const notes = data.notes
    setNote(notes);
  } catch (error) {
    console.error('Error:', error);  
  }
}