import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-text">
        Oops! It seems like you've stumbled upon a page that doesn't exist.
      </p>
      <p className="not-found-text">
        Don't worry, let's get you back on track. You can go back to the{' '}
        <Link to="/" className="not-found-link">
          homepage
        </Link>{' '}
        or try exploring other parts of our site.
      </p>
      <img
        src="/images/404.png" // Path to your custom 404 image
        alt="Page Not Found"
        className="not-found-image"
      />
    </div>
  );
};

export default NotFound;
