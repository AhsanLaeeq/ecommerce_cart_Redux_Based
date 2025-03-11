// Import necessary libraries and files
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS file
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import performance monitoring
import { store } from './state/store'; // Import Redux store
import { Provider } from "react-redux"; // Import Provider to connect Redux with React
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

// Create a root for rendering React application
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> {/* Enables additional checks for detecting potential problems */}
    <Provider store={store}> {/* Provides Redux store to the entire app */}
      <BrowserRouter>  {/* Enables routing for the application */}
        <App /> {/* Main App component */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Function to measure and report app performance
reportWebVitals();
