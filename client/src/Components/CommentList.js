import React from 'react'
import PropTypes from 'prop-types'
import SingleComment from './SingleComment'

const CommentList = ({ comments, deleteComment }) => {
  return (
    <div>
      {
        comments && comments.length > 0
          ? comments.map((comment, index) => {
            return <SingleComment
              key={index}
              comment={comment}
              deleteComment={deleteComment}
            />
          })
          : 'No Comments.'
      }
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired
}

export default CommentList