import React from 'react'
import PropTypes from 'prop-types'
import PostContent from './Components/PostContent'
import Button from './Components/Button'
import {Link} from 'react-router-dom'

const style = {
  container: {
    width: '25vw',
    backgroundColor: '#eee',
    marginRight: '20px',
    marginBottom: '30px',
    height: '450px'
    
    
  },
  post: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  link: {
    display: 'flex',
    background: '#F27935',
    width: '200px',
    padding: '10px',
    alignItems: 'center',
    flexDirection: 'column',
    border: 'none',
    fontFamily: 'Yanone Kaffeesatz, sans-serif',
    fontSize: '18px',
    color: '#fff',
    borderRadius: '0',
    textDecoration: 'none',
    marginBottom: '20px'
  }
}

const SinglePost = ({ post, deletePost }) => {
  return (
    <div style={style.container}>
      <div style={style.post} >
        <PostContent post={post} />
        <Link style={style.link} to={`/post/${post._id}`}>Read about {post.title}</Link>
        <Button handleClick={() => deletePost(post)}>DELETE</Button>
        
      </div>
    </div>
  )
}

SinglePost.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default SinglePost