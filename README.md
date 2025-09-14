# Lab: Task Manager

## Overview
In this lab, we’ll build a Task Manager application that allows users to add, complete, and search tasks. Utilizing the hooks of `useRef` to persist values without re-rendering, `useId` to generate unique IDs for accessibility and controlled components, and `useContext` for global state management.

## Task 1: Define the Problem
The frontend is set up, but the application lacks interactivity and state management.

As a user, I should be able to:
- Add a new task using a form (`useId`)
- Mark tasks as completed (`useContext`)
- Search tasks dynamically (`useRef`)

## Task 2: Determine the Design
Determine state and props needed for each component:
- Global states (`useContext`)
- Persistent Values (`useRef`)
- Unique IDs (`useId`)

## Task 3: Develop the Code
### Implement Global State with `useContext`
- Create `TaskProvider` as global state within `TaskContext.jsx`
- Replace tasks state in app with context

### Mark Task
- Implement `toggleComplete` function within `TaskContext.jsx`
- Call `toggleComplete` upon clicking task button

### Submit Tasks
- Apply `useId` on form input
- Implement `addTask` function within `TaskContext.jsx`
- Call `addTask` within submit

### Implement Search Functionality
- Implement `useRef` on search input
- Implement filter on task context

## Task 4: Test and Refine
Debug and test during development using the provided test suite and React DevTools in Chrome.

## Task 5: Document and Maintain
- Commit as you go, writing meaningful commit messages
- Push commit history to GitHub periodically and when lab is complete

## Tools and Resources
- GitHub Repo: 
- `useRef`: [React useRef](https://react.dev/reference/react/useRef)
- `useContext`: [React useContext](https://react.dev/reference/react/useContext)
- `useId`: [React useId](https://react.dev/reference/react/useId)

## Instructions
### Set Up
Before we begin coding, let's complete the initial setup for this lesson:

#### Fork and Clone
- Go to the provided GitHub repository link.
- Fork the repository to your GitHub account.
- Clone the forked repository to your local machine.

#### Open and Run File
- Open the project in VSCode.
- Run `npm install` to install all necessary dependencies.

## Instructions
### Task 1: Define the Problem
The frontend is set up, but the application lacks interactivity and state management.

As a user, I should be able to:
- Add a new task using a form (`useId`)
- Mark tasks as completed (`useContext`)
- Search tasks dynamically (`useRef`)

### Task 2: Determine the Design
Determine state and props needed for each component.

### Task 3: Develop, Test, and Refine the Code
#### Open React application in browser
```sh
npm run dev
```

#### Run the included backend
```sh
npm run server
```

#### Run test suite
```sh
npm run test
```

### Create feature branch
#### Implement Global State with `useContext`
- Create `TaskProvider` as global state within `TaskContext.jsx`
- Replace tasks state in app with context
- Update `App` within `main.jsx` to be wrapped in `TaskProvider`

#### Mark Task
- Implement `toggleComplete` function within `TaskContext.jsx`
- Ensure `toggleComplete` function edits both the `db.json` and page
- Call `toggleComplete` upon clicking task button

#### Submit Tasks
- Apply `useId` on form input
- Implement `addTask` function within `TaskContext.jsx`
- Call `addTask` within submit

#### Implement Search Functionality
- Implement `useRef` on search input
- Implement filter task context on `TaskList`

### Push feature branch and open a PR on GitHub
- Merge to main

## Task 4: Document and Maintain
### Best Practice documentation steps:
- Add comments to code to explain purpose and logic
- Clarify intent/functionality of code to other developers
- Add screenshot of completed work included in Markdown in `README.md`
- Update `README.md` text to reflect the functionality of the application following [Make a README](https://makeareadme.com)
- Delete any stale branches on GitHub
- Remove unnecessary/commented-out code
- If needed, update `.gitignore` to remove sensitive data

## Submission
Once all tests are passing and working code is pushed to the GitHub main branch, submit your GitHub repo through Canvas using CodeGrade.

## Grading Criteria
The application passes all test suites.

Ensure the application:
- Loads tasks with context.
- Submits new task with `useId`
- Marks tasks as complete.
- Filters tasks shown on the page by a search input.
# Task Manager App (Flatiron Bootcamp Lab – Standard Hooks)

## Overview

This application is a **Task Manager** built with React that demonstrates use of React's **standard hooks**: `useRef`, `useId`, and `useContext`. It was built as part of the **Course 5, Module 4** Flatiron lab to meet all listed requirements and pass all automated tests using a test-driven development approach.

> **GitHub Repo:** [https://github.com/walbeck85/react-hooks-task-manager-lab](https://github.com/walbeck85/react-hooks-task-manager-lab)

---

## Features

- **Add Tasks** using a form powered by `useId` for accessibility
- **Mark Tasks Complete** using global state with `useContext`
- **Search/Filter Tasks** using `useRef` to persist input state
- All data is persisted via a JSON server backend (`npm run server`)
- Responsive, semantic UI with clear feedback

---

## Technologies & Concepts

| Concept      | Used For                                         |
|--------------|--------------------------------------------------|
| `useContext` | Global state management of all tasks             |
| `useRef`     | Dynamic search input for task filtering          |
| `useId`      | Accessible input field labels in the task form   |
| `fetch`      | API calls to `http://localhost:6001/tasks`       |
| `useEffect`  | Initial load of task data                        |

---

## Screenshots

Here are some highlights from the completed app:
> Full screenshot album: [Imgur Gallery](https://imgur.com/a/course-5-module-4-lab-standard-hooks-task-manager-hGB90Ze)

---

## Running the App Locally

### 1. Clone and Install

```sh
git clone https://github.com/walbeck85/react-hooks-task-manager-lab.git
cd react-hooks-task-manager-lab
npm install
```

### 2. Start the App & Backend

```sh
npm run dev     # Starts Vite frontend
npm run server  # Starts JSON backend on port 6001
```

### 3. Run Tests

```sh
npm run test
```

---

## File Structure Highlights

```
├── src
│   ├── context
│   │   └── TaskContext.jsx  ← Global state using Context API
│   ├── components
│   │   └── TaskForm.jsx     ← Form with useId
│   │   └── TaskList.jsx     ← Uses filteredTasks from context
│   │   └── SearchInput.jsx  ← Search powered by useRef
```

---

## Best Practices Followed

- Final merge to `main` before CodeGrade submission
- All tests pass (`npm run test`)
- Dead code removed, `.gitignore` is clean
- README includes screenshots and full documentation

---