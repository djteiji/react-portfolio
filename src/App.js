import React from 'react';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <AboutMe></AboutMe>
        <ContactForm></ContactForm>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
