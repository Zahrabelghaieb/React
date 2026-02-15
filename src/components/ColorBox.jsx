import { useState } from 'react';

function ColorBox({ initialColor = '#FF5733', colorOptions = [] }) {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    setColor(randomColor);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          margin: '20px auto',
          border: '2px solid black'
        }}
      />
      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
}

// Utilisation
function App() {
  return (
    <ColorBox 
      initialColor="#FF5733" 
      colorOptions={['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1']}
    />
  );
}
export default ColorBox;
