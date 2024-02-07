import React from 'react';
import './App.css';
import Flash from './pages/Flash';
import { Route, Routes} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from './pages/Home';


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Flash />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
