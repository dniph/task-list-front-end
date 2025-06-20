import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList.jsx';
import './App.css';

const API = 'http://localhost:5000';

const App = () => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    axios.get(`${API}/tasks`)
      .then((response) => {
        setTaskData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const toggleTaskComplete = (id) => {
    const task = taskData.find((t) => t.id === id);
    const endpoint = task.is_complete
      ? `${API}/tasks/${id}/mark_incomplete`
      : `${API}/tasks/${id}/mark_complete`;

    axios.patch(endpoint)
      .then(() => {
        const updatedTasks = taskData.map((t) =>
          t.id === id ? { ...t, is_complete: !t.is_complete } : t
        );
        setTaskData(updatedTasks);
      })
      .catch((error) => {
        console.error('Error toggling task complete:', error);
      });
  };

  const deleteTask = (id) => {
    axios.delete(`${API}/tasks/${id}`)
      .then(() => {
        const filteredTasks = taskData.filter((task) => task.id !== id);
        setTaskData(filteredTasks);
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <TaskList
          tasks={taskData}
          onToggle={toggleTaskComplete}
          onDelete={deleteTask}
        />
      </main>
    </div>
  );
};

export default App;
