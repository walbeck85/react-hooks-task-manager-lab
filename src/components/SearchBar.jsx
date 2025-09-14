import React, { useRef, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const { setFilter } = useContext(TaskContext);
  const searchRef = useRef();

  function handleSearchChange() {
    setFilter(searchRef.current.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        ref={searchRef}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;