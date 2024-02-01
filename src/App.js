import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import './App.css';
import Flash from './pages/Flash';

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000)
  }, [])
  return (
    <>  <div>
      {loading ?
        ( <ScaleLoader
          color={'black'}
          loading={loading}
          size={60}
          id="spinner"
        />) : (<Flash />)


      }
    </div>
      
    </>
  );
}

export default App;
