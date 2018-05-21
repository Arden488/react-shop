import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () => (
  <div>
    <Link to="/login">Login</Link>
    <Link to="/registration">Register</Link>
  </div>
);

export default Auth;
