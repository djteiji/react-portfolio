import React from 'react';

function Nav() {

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
            <a href="#about">
            About me
            </a>
        </li>
        <li>
            <a href="#portfolio">
                Portfolio
            </a>
        </li>
        <li>
        <a href="#resume">
                Resume
            </a>
        </li>
        <li>
            Contact
        </li>
        </ul>
    </nav>
    </header>
  );
}

export default Nav;