
import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Home from './component/Home';
import Alert from './component/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
      <Route exact path='/login' element={<Login showAlert={showAlert}/>}>
      </Route>
      <Route exact path='/' element={<Home showAlert={showAlert}/> }>
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
