import React, { lazy, useEffect , useRef, Suspense } from 'react';
import './App.css';
import { Route, Routes, useLocation} from "react-router-dom";
// import Flash from './pages/Flash';
// import SignUp from "./pages/SignUp";
// import Home from './pages/Home';
// import Detail from './pages/Detail';


const Home = lazy( () => import('./pages/Home'))
  const SignUp = lazy( () => import("./pages/SignUp"))
  const Flash = lazy( () => import('./pages/Flash'))
  const Detail = lazy( () => import('./pages/Detail'))


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
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading....</p>}>
      <Routes>
        <Route path="/" element={<Flash />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={ <Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        
      </Routes>
      </Suspense>

      <ScrollToTop />

  
      

    </>
    
  );
}

export default App;
