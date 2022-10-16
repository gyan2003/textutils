import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React,{useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App(props) {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
   if(mode==='light')
   {
    document.body.style.backgroundColor='#121212';
    setMode('dark');
   }
   else
   {
    document.body.style.backgroundColor='#FFFDFA';
    setMode('light');
   }
  }
  return(
    
      <BrowserRouter>
      <Navbar title="Text Utils" aboutUtils="About" mode={mode} toggleMode={toggleMode}/>   
       
       <div className="container my-3"> 
       <Routes>
       <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}/>
       
       <Route exact path="about" element={<About mode={mode}/>}/>
       </Routes>
       </div>
     
       </BrowserRouter>
  );
}

export default App;
