import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Home from './Home'
import Blog from './Blog'
import Nav from './Nav'
import PostList from './PostList'
import ViewSinglePost from './ViewSinglePost'
import CreatePostContainer from './CreatePostContainer'
import EditPostContainer from './EditPostContainer'
import Header from './Components/Header'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  state = {
    posts: undefined
  }

  componentDidMount () {
    this.loadPostsFromServer()
  }

  loadPostsFromServer = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done((response) => {
      // console.log('It Works!', response)
      this.setState({ posts: response.data })
    })
  }

  deletePost = (post) => {
    $.ajax({
      url: `/api/posts/${post._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadPostsFromServer()
    })
  }

  render () {
    return (
      <Router>
        <div>
          <Nav /> 
          <Header />
          
    
          <Route exact path='/' component={Home} />
          <Route exact path='/post/:postId' render={() => <ViewSinglePost deletePost={this.deletePost} />} />
          {
            this.state.posts
              ? <Route path='/posts' render={() => <PostList posts={this.state.posts} deletePost={this.deletePost} />} />
              : 'No Posts Yet'
          }
          {
            this.state.posts
              ? <Route path='/create-post' render={() => <CreatePostContainer posts={this.state.posts} loadPostsFromServer={this.loadPostsFromServer} />} />
              : 'No Posts Yet'
          }
          {
            this.state.posts
              ? <Route path='/edit-post/:postId' render={() => <EditPostContainer posts={this.state.posts} />} />
              : 'No Posts Yet'
          }
        </div>
    </Router>
    )
  }

}


export default App
