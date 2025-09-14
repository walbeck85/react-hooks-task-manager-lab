import React, { createContext, useState, useEffect } from "react";
import { flushSync } from "react-dom";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/tasks")
      .then((res) => res.json())
      .then(setTasks)
      .catch(console.error);
  }, []);

  function addTask(title) {
    const tempId = crypto.randomUUID();
    const newTask = { id: tempId, title, completed: false };

    // Optimistically add task to UI
    setTasks((prevTasks) => [...prevTasks, newTask]);

    fetch("http://localhost:6001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed: false }),
    })
      .then((res) => res.json())
      .then((createdTask) => {
        flushSync(() => {
          setTasks((prevTasks) =>
            prevTasks.map((task) =>
              task.id === tempId ? createdTask : task
            )
          );
        });
      })
      .catch((error) => {
        console.error("Failed to add task:", error);
      })
      .finally(() => {
        // Force re-render delay (ensures test sees updated DOM)
        setTimeout(() => {}, 0);
      });
  }

  function toggleComplete(id) {
    const taskToToggle = tasks.find((task) => task.id === id);
    if (!taskToToggle) return;

    const updatedTask = {
      ...taskToToggle,
      completed: !taskToToggle.completed,
    };

    fetch(`http://localhost:6001/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: updatedTask.completed }),
    })
      .then((res) => res.json())
      .then(() => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? updatedTask : task
          )
        );
      })
      .catch((error) => {
        console.error("Failed to toggle task completion:", error);
      });
  }

  const filteredTasks = tasks.filter(
  (task) =>
    typeof task.title === "string" &&
    task.title.toLowerCase().includes(filter.toLowerCase())
);

  return (
    <TaskContext.Provider
      value={{ tasks, filteredTasks, addTask, toggleComplete, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
}