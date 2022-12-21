import React from "react";
import  {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
