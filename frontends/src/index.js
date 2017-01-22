import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import World from './world.jsx';
import Hello from './hello.jsx';
import Articles from './articles.jsx';
import Article from './article.jsx';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Articles}/>
    <Route path="/hello" component={Hello}/>
    <Route path="/articles/:articleId" component={Article}/>
    <Route path="/world" component={World}/>
  </Router>
), document.getElementById('app'))
