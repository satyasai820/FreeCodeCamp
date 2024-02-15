import React, { useEffect , useRef } from 'react';
import './App.css';
import Flash from './pages/Flash';
import { Route, Routes, useLocation} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from './pages/Home';
import Detail from './pages/Detail';


  const ScrollToTop = () => {
    const  pathname  = useLocation();
    const prevPathname = useRef();

    useEffect(() => {
      if (prevPathname.current !== pathname) {
        window.scrollTo(0, 0);
        prevPathname.current = pathname;
      }
    }, [pathname]);

    return null;
  };

function App() {

  return (
    
    <>
      <Routes>
        <Route path="/" element={<Flash />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={ <Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        
      </Routes>

      <ScrollToTop />

  
      

    </>
    
  );
}

export default App;
