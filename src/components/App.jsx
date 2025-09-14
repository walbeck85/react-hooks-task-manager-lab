import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";

function App() {
  const { filteredTasks } = useContext(TaskContext);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
