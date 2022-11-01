import './';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Home from './components/home';
import Btn from './components/refreshbutton/btn';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Userinfo from './components/refreshbutton/userinfo';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/buttonusers'>Button</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buttonusers/:userId' element={<Userinfo />} />
          <Route path='/buttonusers' element={<Btn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
