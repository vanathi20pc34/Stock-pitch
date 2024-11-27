import Dashboard from './components/Dashboard';
import './App.css';
import { useState } from 'react';
import ThemeContext from './contexts/ThemeContext';
import StockContext from './contexts/StockContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("FB");
  

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <StockContext.Provider value={{stockSymbol, setStockSymbol}} >
      <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App;
