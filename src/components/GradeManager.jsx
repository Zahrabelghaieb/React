import { useState } from 'react';

function GradeManager({ initialNotes = [] }) {
  const [notes, setNotes] = useState(initialNotes);
  const [inputNote, setInputNote] = useState('');

  const addNote = () => {
    const note = parseFloat(inputNote);
    if (note >= 0 && note <= 20) {
      setNotes([...notes, note]);
      setInputNote('');
    } else {
      alert('La note doit être entre 0 et 20');
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return (sum / notes.length).toFixed(2);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestionnaire de Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            Note: {note} 
            <button onClick={() => deleteNote(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p><strong>Moyenne : {calculateAverage()}</strong></p>
      <input
        type="number"
        value={inputNote}
        onChange={(e) => setInputNote(e.target.value)}
        placeholder="Entrez une note (0-20)"
      />
      <button onClick={addNote}>Ajouter</button>
    </div>
  );
}
export default GradeManager;
