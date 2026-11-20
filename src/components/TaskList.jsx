import { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function addTask() {
    if (!input.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text: input.trim() }]);
    setInput('');
  }

  function removeTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return (
    <section className="exercise-card task-card">
      <h2>Exercise 2: Task List</h2>
      <div className="task-form">
        <input
          className="text-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="New task"
        />
        <button className="button button-primary" onClick={addTask}>Add</button>
      </div>
      {tasks.length === 0 ? (
        <p className="empty-state">No tasks yet</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li className="task-item" key={task.id}>
              <span>{task.text}</span>
              <button
                className="task-remove"
                onClick={() => removeTask(task.id)}
                aria-label={`Remove ${task.text}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}