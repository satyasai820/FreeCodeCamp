import React from 'react';
import './App.css';
import Flash from './pages/Flash';
import { Route, Routes} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from './pages/Home';
import Detail from './pages/Detail';


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Flash />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App;
