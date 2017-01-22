import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

import ArticleForm from 'Components/article_form';

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
      return "Loading!!"
    } else {
      return this.state.articles.map((article) =>
        <li key={article.id}>{ article.body } | <Link to={`/articles/${article.id}`}>Show</Link></li>
      );
    }
  }

  addNewArtcile(newArtcile) {
    this.setState({
      articles: this.state.articles.concat([newArtcile])
    });
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
        <h1>Create New:</h1>
        <ArticleForm onAdd={this.addNewArtcile.bind(this)}/>
     </div>
    )
  }
}

export default Articles;
