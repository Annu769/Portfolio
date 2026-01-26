/// <reference lib="dom" />
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Fix: Accessing document via global scope, adding a triple-slash reference ensures the compiler recognizes DOM APIs.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);