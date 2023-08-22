import { useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Datepicker, Input, initTE } from "tw-elements";
import { HomePage } from './pages/homePage';
import { SignIn } from './components/login';
import { Register } from './components/register';
import { Reset } from './components/reset';

function App() {
  // useEffect(() => {
  //   initTE({ Datepicker, Input });
  // }, []);


  return (
    <>
      <Router>
            <Routes>
              <Route exact path="/" element={ <HomePage/>}/>
              <Route exact path="/login" element={<SignIn/>}/>
              <Route exact path="/reset" element={<Reset/>}/>
              <Route exact path="/register" element={<Register/>}/>
            </Routes>
      </Router>
    </>
  )
}

export default App
