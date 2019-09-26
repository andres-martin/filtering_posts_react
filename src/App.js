import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor() {
    super();

    this.state = { keyword: '', };
  }
  // function to filter posts that includes given keyword
  filterPosts = (post, search, index) => {
    if (post.title.toLowerCase().includes(search.toLowerCase())) {
      return (
        <li key={index}>
          <a href={post.url} target='blank'><img alt={post.title} src={post.image} /></a>
          <p>{post.title}</p>
        </li>
      )
    }
  }
  // handles change of event targeted value and set new state
  handleChange = (e) => {
    this.setState({ keyword: e.target.value })
  }

  render() {
    return (
      <div>
        <div className="filter">
          <input value={this.state.keyword} onChange={this.handleChange}
            type="text" placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
          {posts.map((post, index) => this.filterPosts(post, this.state.keyword, index))}
        </ul>
      </div>
    )
  }
}


export default App