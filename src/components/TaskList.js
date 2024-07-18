// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask, VisibilityFilters } from '../actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  const filteredTasks = () => {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_COMPLETED:
        return tasks.filter((task) => task.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return tasks.filter((task) => !task.completed);
      case VisibilityFilters.SHOW_ALL:
      default:
        return tasks;
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      <ul className="space-y-2">
        {filteredTasks().map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-sm"
          >
            <span
              className={`flex-1 cursor-pointer ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
              onClick={() => handleToggleTask(task.id)}
            >
              {task.text}
            </span>
            <button
              className="ml-4 px-2 py-1 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
