import React from 'react';

function Footer() {   
    return (
    <footer className="footer bg-dark fixed-bottom">
        <div className='footer-content'>
            <a href="https://github.com/djteiji"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
            <a href="https://www.linkedin.com/in/teiji-malkine-a5433250/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
            <a href="https://stackoverflow.com/users/18232110/djteiji"><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png" alt="StackOverflow" className="icon"/></a>
        </div>
    </footer>
    )
}

export default Footer;