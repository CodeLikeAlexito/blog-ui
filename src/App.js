import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" exact element={ <Home />} />
          <Route path="/about" exact element={ <AboutMe />} />
          <Route path="/contacts" element={ <Contacts />} />
          <Route path="/portfolio" element={ <Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;