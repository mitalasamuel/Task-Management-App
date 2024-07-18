// src/actions/index.js
export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: {
      id: new Date().getTime(), // Unique ID for the task
      text,
      completed: false,
    },
  });
  
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: {
      id,
    },
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: {
      id,
    },
  });
  
  export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  });
  
  export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
  };
  