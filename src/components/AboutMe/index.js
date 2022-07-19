import React from 'react';
import ProfilePic from '../../assets/images/React-Profile-Pic.jpg'

function AboutMe() {
  return (
    <section className='about-me-section'>
      <h1 id="about">About Me</h1>
      <img className='mypic' src={ProfilePic} alt="Teiji-Profile-Pic"></img>
      <p className='bio'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nihil molestiae ex architecto saepe nam et laudantium commodi doloribus minima? Repellendus dolore natus odit ipsum fuga dolores rem omnis excepturi, optio mollitia sit explicabo maiores quis perspiciatis unde maxime, delectus vitae cum totam est. Architecto, labore illum commodi est omnis magni deleniti impedit quasi. Nulla, quasi aliquam natus voluptatem ex vel quod iusto animi sapiente saepe eius eaque quis, eos, deleniti maxime quibusdam vero ducimus? Ea sunt asperiores, repellendus exercitationem rem, magnam neque rerum minima porro dolorum ipsum similique explicabo nulla, cum fuga quae inventore optio nemo dolorem perferendis ratione?</p>
    </section>
  );
}

export default AboutMe;