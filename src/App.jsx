import React from "react";
import  {BrowserRouter as Routes, Route} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
  );
}

export default App;
