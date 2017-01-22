import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

import ArticleForm from 'Components/article_form';

class Articles extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      newArtcileForm: true
    };

    this.article = {};
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

  deleteArticle(article) {
    let articles = this.state.articles;
    let index = articles.findIndex( element => element.id === article.id );

    axios.delete(`/api/v1/articles/${article.id}`)
      .then((response) => {
        articles.splice(index, 1);
        this.setState({articles: articles });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  editArticle(article) {
    this.article = article;
    this.setState({newArtcileForm: false})
  }

  composeLists() {
    if (this.state.articles.length === 0){
      return "Loading!!"
    } else {
      return this.state.articles.map((article) =>
        <li key={article.id}>
          { article.body } |
          <Link to={`/articles/${article.id}`}>Show</Link> |
          <button label="Delete" onClick={this.deleteArticle.bind(this, article)}> Delete</button> |
          <button label="Edit"   onClick={this.editArticle.bind(this, article)}>   Edit</button>
        </li>
      );
    }
  }

  addNewArticle(newArtcile) {
    this.setState({
      articles: this.state.articles.concat([newArtcile])
    });
  }

  updateArticle(article) {
    let articles = this.state.articles;
    let index = articles.findIndex( element => element.id === article.id );
    articles[index] = article;

    this.setState({articles: articles, newArtcileForm: true});
    this.article = {};
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
        <ArticleForm onEdit={this.updateArticle.bind(this)} newRecord={this.state.newArtcileForm} article={this.article} />
     </div>
    )
  }
}

export default Articles;
