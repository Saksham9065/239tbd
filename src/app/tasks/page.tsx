"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <main className="min-h-screen bg-white text-black p-10 pt-28">
      <div className="max-w-xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black mb-8 text-[#0c6a22]"
        >
          Task Manager
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-4 mb-8"
        >
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#0c6a22" }}
            className="flex-1 bg-gray-50 border border-gray-200 p-3 rounded-xl outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addTask}
            className="bg-[#0c6a22] px-6 py-3 rounded-xl font-bold text-white hover:bg-[#0a581c] transition"
          >
            Add
          </motion.button>
        </motion.div>

        {loading ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500"
          >
            Loading...
          </motion.p>
        ) : (
          <motion.ul variants={listVariants} initial="hidden" animate="visible" className="space-y-4">
            <AnimatePresence>
              {tasks.map((task) => (
                <motion.li
                  key={task._id}
                  variants={itemVariants}
                  layout
                  className="bg-gray-50 p-4 rounded-xl flex justify-between items-center border border-gray-200"
                >
                  <span className="text-gray-800">{task.title}</span>
                  <motion.button
                    whileHover={{ scale: 1.1, color: "#dc2626" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => deleteTask(task._id)}
                    className="text-red-600 hover:text-red-800 text-sm font-bold uppercase"
                  >
                    Delete
                  </motion.button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>
    </main>
  );
}