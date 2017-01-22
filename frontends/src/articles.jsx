import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class Articles extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios.get('/api/v1/articles')
      .then((response) => {
        this.setState({
          articles: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  composeLists() {
    if (this.state.articles.length === 0){
      return "Loading...."
    } else {
      return this.state.articles.map((article) =>
        <li key={article.id}>{ article.body } | <Link to={`/articles/${article.id}`}>Show</Link></li>
      );
    }
  }

  render() {
    const listItems = this.composeLists();

    return(
      <div>
        <h1>Navigations</h1>
        <ul role="nav">
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/world">World</Link></li>
        </ul>
        <hr/>
        <h1> Articles: </h1>
        <ul id='articles'>{listItems}</ul>
     </div>
    )
  }
}

export default Articles;
