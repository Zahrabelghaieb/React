import { useState } from 'react';

function TodoList({ initialTasks = [] }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState('');
  const [personName, setPersonName] = useState('');
  const [priority, setPriority] = useState('Moyenne');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    if (taskName.trim() && personName.trim()) {
      setTasks([...tasks, { 
        name: taskName, 
        person: personName,
        priority, 
        completed: false 
      }]);
      setTaskName('');
      setPersonName('');
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
    task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (task.person && task.person.toLowerCase().includes(searchTerm.toLowerCase()))
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
          {task.person && <span> - 👤 {task.person}</span>}
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
      <input
        type="text"
        placeholder="Nom et prénom"
        value={personName}
        onChange={(e) => setPersonName(e.target.value)}
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

export default TodoList;