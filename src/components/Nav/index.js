import React from 'react';

function Nav({ currentPage, handlePageChange }) {

  return (
    <header>
    <h2>
        <a href="/">
            Teiji Malkine
        </a>
    </h2>
    <nav>
        <ul>
        <li>
            <a 
            href="#about"
            onClick={() => handlePageChange('AboutMe')}
            >
            About me
            </a>
        </li>
        <li>
            <a 
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            >
                Projects
            </a>
        </li>
        <li>
        <a 
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        >
                Resume
            </a>
        </li>
        <li>
        <a 
        href="#contact"
        onClick={() => handlePageChange('Contact')}
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