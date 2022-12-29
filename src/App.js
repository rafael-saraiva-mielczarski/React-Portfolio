import './App.css';
import Header from './components/Header/header.js';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe'
import { Routes, Route } from "react-router-dom";
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';


function App() {

  return (
      <div className='App'>
        <Header className='header'/>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
            </Routes>
      </div>
  );
}

export default App;
