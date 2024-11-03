import { BrowserRouter,Router, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Biology from "./components/Biology";
import Model from "./components/Model";
import React, { useState } from 'react';
import { ThemeProvider } from "./components/ThemeContext";
function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <Navbar/>
        <Routes>
          <Route path="/" Component={Biology}/>  
          <Route path="/modeling" Component={Model}/>
        </Routes> 
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
