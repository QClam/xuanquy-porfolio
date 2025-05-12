import { useState } from 'react';
import './App.css'
import { Loading } from './components/Loading'
import Navbar from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Project } from './components/sections/Project';
import { Contact } from './components/sections/Contact';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Project />
        <Contact />
    </>
  )
}

export default App
