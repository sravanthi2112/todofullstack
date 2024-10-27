// src/services/taskService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async () => await axios.get(API_URL);
export const addTask = async (task) => await axios.post(API_URL, task);
export const updateTask = async (id, task) => await axios.put(`${API_URL}/${id}`, task);
export const deleteTask = async (id) => await axios.delete(`${API_URL}/${id}`);
