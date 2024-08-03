import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="intro-section">
        <h1>Introducing ISTE</h1>
        <h2>Indian Society For Technical Education</h2>
      </section>
      <section className="short-heading">
        <h3>Short heading goes here</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="cards-section">
        <div className="card">
          <h4>EVENTS</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Button</button>
        </div>
        <div className="card">
          <h4>ABOUT US</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Button</button>
        </div>
        <div className="card">
          <h4>TEAM</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Button</button>
        </div>
        <div className="card">
          <h4>ALUMNI</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Button</button>
        </div>
        <div className="card">
          <h4>PAST PROJECTS</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Button</button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
