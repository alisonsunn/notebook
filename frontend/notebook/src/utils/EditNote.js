export const editNote = async (title, content, id, setOpenPanel, openPanel, getAllNotes, setNote) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/edit-note`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        title: title,
        content: content
      })
    })

    const data = await response.json();
    if (response.status === 201) {
      alert('Note updated successfully!')
      setOpenPanel({...openPanel, isOpen: false});
      getAllNotes(setNote);
    } else {
      alert(`Error: ${data.message}`)
    }
  } catch (error) {
    console.error('Error:', error.message)
    alert(`Error Occurred: ${error.message}`)
  }
}
