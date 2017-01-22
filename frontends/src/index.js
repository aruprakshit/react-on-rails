import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import World from 'Components/world';
import Hello from 'Components/hello';
import Articles from 'Components/articles';
import Article from 'Components/article';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Articles}/>
    <Route path="/hello" component={Hello}/>
    <Route path="/articles/:articleId" component={Article}/>
    <Route path="/world" component={World}/>
  </Router>
), document.getElementById('app'))
