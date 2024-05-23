import React from 'react';
import './Portfolio.css'; // Import the CSS file

function Portfolio() {
    return (
      <div className='portfolio'>
        {/* HEADER */}
        <section className='header'>
          <h2>Header</h2>
          <div>
            <h3>Name:</h3>
            <p>Your Name</p>
          </div>
          <div>
            <h3>Career:</h3>
            <p>Your Career</p>
          </div>
          <div>
            <h3>Phone Number:</h3>
            <p>Your Phone Number</p>
          </div>
          <div>
            <h3>Email Address:</h3>
            <p>Your Email Address</p>
          </div>
          <div>
            <h3>Location:</h3>
            <p>Your Location</p>
          </div>
        </section>
  
        {/* EXPERIENCE */}
        <section className='experience'>
          <h2>Experience</h2>
          <div>
            <h3>Company Name:</h3>
            <p>Position: Your Position</p>
            <p>Description: Short Description</p>
          </div>
          {/* Add more experience sections as needed */}
        </section>
  
        {/* EDUCATION */}
        <section className='education'>
          <h2>Education</h2>
          <div>
            <h3>Year of Graduation:</h3>
            <p>Your Year of Graduation</p>
          </div>
          <div>
            <h3>University Name:</h3>
            <p>Your University Name</p>
          </div>
          <div>
            <h3>Speciality:</h3>
            <p>Your Speciality</p>
          </div>
          <div>
            <h3>Thesis Description:</h3>
            <p>Short Description of Thesis</p>
          </div>
        </section>
  
        {/* UNIVERSITY PROJECTS */}
        <section className='university-projects'>
          <h2>University Projects</h2>
          <div>
            <p>Project Name:</p>
            <p>Description of Project</p>
          </div>
          {/* Add more university project sections as needed */}
        </section>
  
        {/* SIDE PROJECTS */}
        <section className='side-projects'>
          <h2>Side Projects</h2>
          <div>
            <p>Project Name:</p>
            <p>Description of Project</p>
          </div>
          {/* Add more side project sections as needed */}
        </section>
      </div>
    );
  }

export default Portfolio;