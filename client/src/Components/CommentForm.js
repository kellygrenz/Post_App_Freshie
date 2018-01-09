import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Fields from './Fields'
import TextBox from './TextBox'

const style = {
  formContainer: {
    background: '#336E7B',
    padding: '20px'
  }
}

const CommentForm = ({ username, message, handleCommentSubmit, onChangeHandler }) => {
  return (
    <form style={style.formContainer}>
      <Fields
        label={'Name:'}
        id={'username'}
        type={'text'}
        value={username}
        handleChange={onChangeHandler}
      />
      <TextBox
        label={'Enter A Comment:'}
        id={'message'}
        type={'text'}
        value={message}
        handleChange={onChangeHandler}
        rows={'5'}
        cols={'40'}
      />
      <Button handleClick={handleCommentSubmit} type='button'>COMMENT</Button>
    </form>
  )
}

CommentForm.propTypes = {
  username: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  handleCommentSubmit: PropTypes.func.isRequired
}

export default CommentForm