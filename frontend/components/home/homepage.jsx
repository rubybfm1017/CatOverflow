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
        <div className="resource">
        <h1>How is this built?</h1>
        <div className="resource-container">
            <div className="resource-item">
            <object className="react-logo" />
            <h3>Frontend</h3>
            The front end was built on React + Redux to provide a responsive experience. Some extra details, such as
            loading indicator, form validation indicator, and form disabling on submitting were added using a combination
            of JavaScript and SCSS to improve user experience. React also allowed the reuse of many components, saving
            time and reducing errors.
            </div>
            <div className="resource-item">
            <object className="rails-logo" />
            <h3>Backend</h3>
            Backend is a Rest API server implemented using Ruby on Rails. Most of the heavy lifting is done on the
            backend. It handles user auth, CRUD requests on questions, answers, posts, votes, and more. It also has a
            simple text search feature that searches for both the title and the body of all posts.
            </div>
            <div className="resource-item">
            <object className="postgresql-logo" />
            <h3>Database</h3>
            This application uses PostgreSQL. Most queries are handled by Rails Active Record, but when querying data such
            as the current revision of a question or an answer, SQL views and Rails Scenic were used to simplify active
            record querying statements.
            </div>
        </div>
        </div>
    </div>
  )
}

export default HomePageComponent;