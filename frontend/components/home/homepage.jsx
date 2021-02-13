import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../nav/navbar';

const HomePageComponent = () => {
  return (
    <div className="home">
        <NavbarContainer/>
        <div className="entry">
          <div className="entry-content">
              <h1>Cat Overflow</h1>
              <p>We build platform for cat lovers to post questions and answers about cats</p>
              <Link to="/questions" className="button button-success">See All Questions</Link>
          </div>
        </div>
    </div>
  )
}

export default HomePageComponent;