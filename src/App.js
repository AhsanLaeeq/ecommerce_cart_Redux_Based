// Import the main CSS file for styling
import './App.css';

// Import the Navbar and Shop components
import Navbar from './component/Navbar';
import Shop from './component/Shop';

function App() {
  return (
    <div className="App"> {/* Main container for the application */}
      <>
        {/* Navbar Component: Displays the navigation bar */}
        <Navbar />

        {/* Shop Component: Contains the shopping functionality */}
        <Shop />
      </>
    </div>
  );
}

// Export the App component to be used in index.js
export default App;
