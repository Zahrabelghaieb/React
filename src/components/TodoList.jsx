import { useState } from 'react';

function TodoList({ initialTasks = [] }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Moyenne');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, priority, completed: false }]);
      setTaskName('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List avec Priorités</h2>
      
      <input
        type="text"
        placeholder="Rechercher une tâche"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h3>Tâches :</h3>
      {filteredTasks.map((task, index) => (
        <div
          key={index}
          style={{
            backgroundColor: task.completed ? '#90EE90' : 'white',
            padding: '10px',
            margin: '5px',
            border: '1px solid #ddd'
          }}
        >
          <strong>{task.name}</strong> - {task.priority}
          <button onClick={() => toggleComplete(index)}>
            {task.completed ? 'Non terminé' : 'Terminé'}
          </button>
          <button onClick={() => deleteTask(index)}>Supprimer</button>
        </div>
      ))}

      <p>Total des tâches : {tasks.length}</p>
      <p>Tâches terminées : {completedCount}</p>

      <input
        type="text"
        placeholder="Nom de la tâche"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Haute</option>
        <option>Moyenne</option>
        <option>Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
}

// Utilisation
function App() {
  return (
    <TodoList
      initialTasks={[
        { name: 'Finir le projet React', priority: 'Haute', completed: false },
        { name: 'Préparer le repas', priority: 'Moyenne', completed: false }
      ]}
    />
  );
}
export default TodoList;
