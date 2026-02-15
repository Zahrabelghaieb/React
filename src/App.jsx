import Counter from './components/Counter';
import ListManager from './components/ListManager';
import ColorBox from './components/ColorBox';
import GradeManager from './components/GradeManager';
import TodoList from './components/TodoList';

function App() {
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
        colorOptions={['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1']}
      />
      
      <hr />
      <h2>Exercice 4 : Gestionnaire de Notes</h2>
      <GradeManager initialNotes={[15, 18, 12]} />
      
      <hr />
      <h2>Exercice 5 : Todo List avec Priorités</h2>
      <TodoList
        initialTasks={[
          { name: 'Finir le projet React', priority: 'Haute', completed: false },
          { name: 'Préparer le repas', priority: 'Moyenne', completed: false },
          { name: 'Aller courir', priority: 'Basse', completed: false }
        ]}
      />
    </div>
  );
}

export default App;