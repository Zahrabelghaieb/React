import Counter from './components/Counter';
import ListManager from './components/ListManager';
import ColorBox from './components/ColorBox';
import GradeManager from './components/GradeManager';
import TodoList from './components/TodoList';

/*function App() {
  return (
    <div>
      <h1>Exercices React - State et Props</h1>
      
      <hr />
      <h2>Exercice 1 : Compteur</h2>
      <Counter initialCount={10} step={5} />
      
      <hr />
      <h2>Exercice 2 : Liste Dynamique</h2>
      <ListManager 
        initialItems={['React', 'Angular', 'VueJs']} 
        placeholder="Entrez un nouveau élément"
      />
      
      <hr />
      <h2>Exercice 3 : ColorBox</h2>
      <ColorBox 
        initialColor="#FF5733" 
        colorOptions={['#881900', '#3bbd53', '#1130b8', '#F333FF', '#FF33A1']}
      />
      
      <hr />
      <h2>Exercice 4 : Gestionnaire de Notes</h2>
      <GradeManager initialNotes={[15, 18, 12]} />
      
      <hr />
      <h2>Exercice 5 : Todo List avec Priorités</h2>
      <TodoList
  initialTasks={[
    { name: 'Finir le projet React', person: 'Zahra Belghaieb', priority: 'Haute', completed: false },
    { name: 'Préparer le repas', person: 'Zahra Belghaieb', priority: 'Moyenne', completed: false },
    { name: 'Aller courir', person: 'Zahra Belghaieb', priority: 'Basse', completed: false }
  ]}
/>
    </div>
  );
}

export default App;*/

import React from 'react';
import './App.css';
import Events from './components/events/Events';

function App() {
  return (
    <div className="App">
      <Events />
    </div>
  );
}

export default App;