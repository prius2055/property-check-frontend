import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
  const [appDisplay, setAppDisplay] = useState({
    showHomePage: true,
    showDashboard: false,
  });
  return (
    <div className="App">
      {appDisplay.showHomePage && <Home />}
      {appDisplay.showDashboard && <Dashboard />}
    </div>
  );
}

export default App;

