// components/Home.js
import {Link} from 'react-router-dom'

import React from 'react';

const home = () => {
  return (
    <div>
      <div>
        <h3>Welcome to my portfolio page! My name is</h3>
        <h1>Ana</h1>
        <p>and I'm Web Developer!</p>
        <Link to="/projects/2b">Project 2b</Link> 
      </div>
    </div>
  )
}

export default home;