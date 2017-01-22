import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class Article extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    };
  }

  componentDidMount() {
    axios.get(`/api/v1/articles/${this.props.params.articleId}`)
      .then((response) => {
        const article = response.data;

        this.setState({
          title: article.title,
          body: article.body
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return(
      <div>
        <h1>Navigations</h1>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
        </ul>
        <hr/>
        <h1>{this.state.title}</h1>
        <article>
          {this.state.body}
        </article>
      </div>
    )
  }
}

export default Article;
