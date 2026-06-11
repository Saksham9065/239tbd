"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner"; // 1. Import toast

interface Task {
  _id: string;
  title: string;
  completed: boolean;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  // Define the fetching logic
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
      toast.success("Task added successfully!"); // Added success toast
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Failed to add task");
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
      toast.success("Task deleted successfully"); // Success toast
    } catch (error) {
      console.error("DELETE Task Error:", error);
      toast.error("Failed to delete task"); // Error toast
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white p-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-[#F97316]">Task Manager</h1>
        
        <div className="flex gap-4 mb-8">
          <input
            className="flex-1 bg-white/5 border border-white/10 p-3 rounded-xl outline-none focus:border-[#F97316]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button 
            onClick={addTask}
            className="bg-[#F97316] px-6 py-3 rounded-xl font-bold hover:bg-[#EA580C] transition"
          >
            Add
          </button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li key={task._id} className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5">
                <span>{task.title}</span>
                <button 
                  onClick={() => deleteTask(task._id)}
                  className="text-red-400 hover:text-red-300 text-sm"
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