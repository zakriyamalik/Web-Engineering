import React,{useState} from 'react'
import TaskItems from './Taskitems.jsx'

function Dashboard(){
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Buy groceries', done: false },
        { id: 2, title: 'Finish homework', done: false },
        { id: 3, title: 'Read a book', done: false },
      ]);


      const [newTask, setNewTask] = useState('');

      const toggleTask = (id) => {
        const updatedTasks = tasks.map(task =>
          task.id === id ? { ...task, done: !task.done } : task
        );
        setTasks(updatedTasks);
      };

      
       return (

      <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div>
        <h2>Your Tasks</h2>
        {tasks.map(task => (
          <TaskItems key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
      </div>

      );
}
export default Dashboard
