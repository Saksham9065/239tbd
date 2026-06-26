"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

interface Task {
  _id: string;
  title: string;
  completed: boolean;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("/api/tasks");
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        toast.error("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!input.trim()) return;
    try {
      const res = await axios.post("/api/tasks", { title: input });
      setTasks([...tasks, res.data]);
      setInput("");
      toast.success("Task added successfully!");
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Failed to add task");
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
      toast.success("Task deleted successfully");
    } catch (error) {
      console.error("DELETE Task Error:", error);
      toast.error("Failed to delete task");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black p-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-[#0c6a22]">Task Manager</h1>
        
        <div className="flex gap-4 mb-8">
          <input
            className="flex-1 bg-gray-50 border border-gray-200 p-3 rounded-xl outline-none focus:border-[#0c6a22]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button 
            onClick={addTask}
            className="bg-[#0c6a22] px-6 py-3 rounded-xl font-bold text-white hover:bg-[#0a581c] transition"
          >
            Add
          </button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li key={task._id} className="bg-gray-50 p-4 rounded-xl flex justify-between items-center border border-gray-200">
                <span className="text-gray-800">{task.title}</span>
                <button 
                  onClick={() => deleteTask(task._id)}
                  className="text-red-600 hover:text-red-800 text-sm font-bold uppercase"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}