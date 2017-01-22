import React from 'react';
import axios from 'axios';

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'title') {
      this.setState({title: event.target.value});
    } else if (event.target.name === 'body') {
      this.setState({body: event.target.value});
    }
  }

  handleSubmit(event) {
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

  clearInputs() {
    this.setState({title: "", body: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
