import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Menu from './Menu.js';
import Welcome from './Welcome.js';
import Options from './Options.js';

function App() {
  return (
    <BrowserRouter>
      <nav>
            <Link to="/"><img src="./logo.png" alt="logo" id="logo" /></Link>
            <Link to="/menu"><button id="menu-btn">Menu</button></Link>
      </nav>

      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/menu/*" element={<Menu />} />
        <Route path="/options" element={<Options />} />
      </Routes>
    
    </BrowserRouter>
  );
}



export default App;
























// import './App.css';
// import menuDataJSON from './menuData.json';


// function App() {

//   // const menuData = JSON.parse(menuDataJSON)

//   return (
//     <>
//       console.log(menuData)
//     </>
//   );
// }

// export default App;
