import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import SignUp from './components/SignIn/SignUp.jsx';
import LogOut from './components/Home/LogOut.jsx';
import { AuthProvider } from "./utils/AuthContext.jsx";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/logowanie' element={<SignIn/>}/>
          <Route path='/rejestracja' element={<SignUp/>}/>
          <Route path='/wylogowanie' element={<LogOut />}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;