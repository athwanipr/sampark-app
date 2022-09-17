//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route exact path='/login' element={<Login/>}>
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
