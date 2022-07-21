import React from 'react';

function Nav({ currentPage, handlePageChange }) {

  return (
    <header className='flex-row'>
    <h1 className='name'>
        <a href="/">
            Teiji Malkine
        </a>
    </h1>
    <nav>
        <ul className='flex-row'>
        <li className="mx-2">
            <a 
            href="#aboutme"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            >
            About Me
            </a>
        </li>
        <li className="mx-2">
            <a 
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
                Projects
            </a>
        </li>
        <li className="mx-2">
        <a 
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
                Resume
            </a>
        </li>
        <li className="mx-2">
        <a 
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
            Contact
            </a>
        </li>
        </ul>
    </nav>
    </header>
  );
}

export default Nav;