import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const style = {
  comment: {
    background: '#fff',
    padding: '20px', 
    marginBottom: '10px'
  }
}

const SingleComment = ({ comment, deleteComment }) => {
  return (
    <div style={style.comment}>
      <img alt='' src={comment.icon} />
      <h3>{comment.message}</h3>
      <p>- {comment.username}</p>
      
      <Button handleClick={() => deleteComment(comment._id)}>DELETE COMMENT</Button>
    </div>
  )
}

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
}

export default SingleComment