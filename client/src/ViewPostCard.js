import React from 'react'
import PropTypes from 'prop-types'
import PostContent from './Components/PostContent'
import CommentList from './Components/CommentList'
import CommentForm from './Components/CommentForm'

import {Link} from 'react-router-dom'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    
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
  }, 
  form: {
    background: '#fff',
    padding: '30px',
    alignItems: 'center'
    
  },
  h4: {
    color: '#fff',
    fontFamily: 'Yanone Kaffeesatz, sans-serif',
    fontSize: '25px'
  }
}

const ViewPostCard = ({ post, comments, username, icon, message, onChangeHandler, handleCommentSubmit, deleteComment }) => {
  return (
    <div style={style.container}>
     
      <PostContent post={post} message={post.message} />
      <Link style={style.link} to={`/edit-post/${post._id}`}>Edit This Post</Link>
      <div>
        <h2>Comments:</h2>
        <CommentList
          comments={comments}
          deleteComment={deleteComment}
        />
        <div style={style.form}>
          <h4> Enter a Comment</h4>
        <CommentForm
          username={username}
          icon={icon}
          message={message}
          handleCommentSubmit={handleCommentSubmit}
          onChangeHandler={onChangeHandler}
        />
        </div>
      </div>
    </div>
  )
}

ViewPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  handleCommentSubmit: PropTypes.func.isRequired
}

export default ViewPostCard