

import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route path = '/' exact element = {<Home/>}/>
        <Route path = '/about' exact element = {<About/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;