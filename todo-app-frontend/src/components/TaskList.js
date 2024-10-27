// src/components/TaskList.js

import React, { useState, useEffect } from 'react';
import Task from './Task';
import { getTasks, addTask, updateTask, deleteTask } from '../services/taskService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleAddTask = async () => {
    console.log(newTask)
    if (newTask.trim()) {
      const response = await addTask({ title: newTask });
      setTasks([...tasks, response.data]);
      setNewTask('');
    }
  };

  const handleUpdateTask = async (task) => {
    await updateTask(task._id, task);
    loadTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div>
        {tasks.map((task) => (
          <Task key={task._id} task={task} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
