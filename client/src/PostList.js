import React from 'react'
import PropTypes from 'prop-types'
import SinglePost from './SinglePost'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  h1: {
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Yanone Kaffeesatz, sans-serif'
  },
  postsSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#43ac96',
    borderRadius: '2px',
    padding: '50px'
  }
}

const PostList = ({ posts, deletePost }) => {
  return (
    <div>
      <div style={style.container}>
        <h1 style={style.h1}>See Where Everyone Has Been</h1>
      </div>
      <div style={style.postsSection}>
        {
          posts.map((post, index) => {
            return <SinglePost
              key={index}
              post={post}
              deletePost={deletePost}
            />
          })
        }
    </div>
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostList
