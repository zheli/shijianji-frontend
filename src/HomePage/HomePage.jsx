import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function HomePage() {
  const user = useSelector(state => state.authentication.user);
  console.log('user', user);

  return (
      <div>
        <h1>Hi {user}!</h1>
        <p>
          <Link to="/login">Login page</Link>
        </p>
      </div>
  );
}

export { HomePage };
