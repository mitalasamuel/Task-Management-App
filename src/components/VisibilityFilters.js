// src/components/VisibilityFilters.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setVisibilityFilter, VisibilityFilters } from '../actions';

const VisibilityFiltersComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="mt-6 p-4 bg-white rounded-md shadow-md">
      <h3 className="text-lg font-bold mb-4">Filters:</h3>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}
        >
          All
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}
        >
          Active
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default VisibilityFiltersComponent;
