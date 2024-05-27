import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={ <About/> } />
          <Route path="/projects" element={ <Projects/> } ></Route>
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
