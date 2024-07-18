/* eslint-disable jsx-a11y/img-redundant-alt */
// src/App.js
import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import VisibilityFiltersComponent from './components/VisibilityFilters';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg p-6 bg-white rounded-md shadow-md">
        <img src='/true.webp' alt="Placeholder Image" />
        <h1 className="text-2xl font-bold mb-6 text-center">Task Manager</h1>
        <AddTask />
        <VisibilityFiltersComponent />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
