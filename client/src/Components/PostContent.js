import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    width: '80%'
  },
  img: {
    width: '100%'
  },
  title: {
    fontFamily: 'Shadows Into Light, cursive',
    fontSize: '30px',
    fontColor: '#22313F'
  }
}

const PostContent = ({ post }) => {
  return (
    <div style={style.container}>
      <img style={style.img} alt='' src={post.img} />
      <h3 style={style.title}>{post.title}</h3>
      
      
    </div>
  )
}

PostContent.propTypes = {
  post: PropTypes.object.isRequired,
  message: PropTypes.string
}

export default PostContent