import React from 'react';
import { Link } from 'react-router'

class Articles extends React.Component {
  render() {
    return(
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/world">World</Link></li>
        </ul>
      </div>
    )
  }
}

export default Articles;
