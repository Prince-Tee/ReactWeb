import React from 'react'
import './App.css';
import Contact from './pages/Contact';
import Home  from './pages/Home';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
    
    <Routes>
    <Route path="/contact" element={<Contact />} />
    <Route path="/" element={<Home />} />
    
    </Routes> 
    
     
    
     
     
     
    </div>
  
    
    
    </Router>
  );
}

export default App;
