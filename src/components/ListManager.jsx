import { useState } from 'react';

function ListManager({ initialItems = [], placeholder = "Entrez un élément" }) {
  const [items, setItems] = useState(initialItems);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Liste :</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => deleteItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={addItem}>Ajouter</button>
    </div>
  );
}

// Utilisation
function App() {
  return (
    <ListManager 
      initialItems={['React', 'Angular', 'VueJs']} 
      placeholder="Entrez un nouveau élément"
    />
  );
}
export default ListManager;
