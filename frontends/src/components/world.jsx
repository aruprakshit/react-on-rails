import React from 'react';
import { Link } from 'react-router'

class World extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello</h1>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hello">Hello</Link></li>
        </ul>
      </div>
    )
  }
}

export default World;
