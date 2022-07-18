import React, { useState } from 'react';
import Nav from '../Nav';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';
import Footer from '../Footer';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // TODO: Add a comment describing the functionality of this method
  // Depending which tab they click, the JSX from that page is rendered
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Nav className="App-header" currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}