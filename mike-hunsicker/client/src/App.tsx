import React from 'react';
import axios from 'axios';
import PostList from './components/PostList/PostList';
import './App.css';

class App extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/posts')
    .then((response) => {
      this.setState({
        posts: response.data
      })
    })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
    })
  }

  viewPost(post) {
    console.log(`view ${post.title}`);
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          BlogBox
        </header>
        <main className="App-content">
          <PostList posts={posts} clickPost={this.viewPost} />
        </main>
      </div>
    );
  }
}

export default App;
