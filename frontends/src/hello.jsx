import React from 'react';
import { Link } from 'react-router'

class Hello extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello</h1>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/world">World</Link></li>
        </ul>
      </div>
    )
  }
}

export default Hello;
