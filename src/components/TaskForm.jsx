import React, { useState, useId, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState(""); // Track input field value
  const id = useId(); // Generate unique ID for label-input pair
  const { addTask } = useContext(TaskContext); // Access addTask from context

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim() === "") return;
    addTask(taskName); // Add new task through global context
    setTaskName(""); // Clear input field after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>New Task:</label>
      <input
        id={id}
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
