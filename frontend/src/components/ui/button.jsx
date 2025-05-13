import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={
        'px-4 py-2 rounded-xl shadow-sm font-medium transition ' +
        'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 ' +
        className
      }
    >
      {children}
    </button>
  );
}
