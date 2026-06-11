import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const fetchTasks = () => API.get('/tasks');
export const createTask = (task: { title: string }) => API.post('/tasks', task);
export const updateTask = (id: string, task: { completed: boolean }) => API.put(`/tasks/${id}`, task);
export const deleteTask = (id: string) => API.delete(`/tasks/${id}`);