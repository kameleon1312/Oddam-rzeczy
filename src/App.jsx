import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import SignUp from './components/SignIn/SignUp.jsx';
import LogOut from './components/Home/LogOut.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/logowanie' element={<SignIn/>}/>
        <Route path='/rejestracja' element={<SignUp/>}/>
        <Route path='/wylogowanie' element={<LogOut />}/>
      </Routes>
    </Router>
  );
};

export default App;