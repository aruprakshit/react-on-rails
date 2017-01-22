import React from 'react';
import axios from 'axios';

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "", body: "" }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'title') {
      this.setState({title: event.target.value});
    } else if (event.target.name === 'body') {
      this.setState({body: event.target.value});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newRecord === false ) {
      this.setState({ title: nextProps.article.title, body: nextProps.article.body });
    }
  }

  handleNewSubmit(event) {
    event.preventDefault();

    axios.post('/api/v1/articles', this.state)
      .then((response) => {
        this.props.onAdd(response.data);
        this.clearInputs();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleEditSubmit(event) {
    event.preventDefault();

    axios.put(`/api/v1/articles/${this.props.article.id}`, this.state)
      .then((response) => {
        this.props.onEdit(response.data);
        this.clearInputs();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  clearInputs() {
    this.setState({title: "", body: ""})
  }

  render() {
    let formAction = this.props.newRecord ? this.handleNewSubmit.bind(this) : this.handleEditSubmit.bind(this);

    return (
      <form onSubmit={formAction}>
        <div>
          <label>Title:
             <input
               type="text"
               value={this.state.title}
               name='title'
               onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>Body:
             <textarea
               rows="4"
               cols="50"
               value={this.state.body}
               name='body'
               onChange={this.handleChange} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ArticleForm;
