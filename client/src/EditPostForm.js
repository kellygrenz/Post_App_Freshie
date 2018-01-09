import React from 'react'
import PropTypes from 'prop-types'
import Button from './Components/Button'
import Fields from './Components/Fields'
import TextBox from './Components/TextBox'

const EditPostForm = ({ img, title, author, message, onChangeHandler, submitPostToServer }) => {
  return (
    <form>
      <Fields
        label={'Enter Image URL Here:'}
        id={'img'}
        type={'text'}
        value={img}
        handleChange={onChangeHandler}
      />
      <Fields
        label={'Enter Title Here:'}
        id={'title'}
        type={'text'}
        value={title}
        handleChange={onChangeHandler}
      />
      <Fields
        label={"Enter Author's Name Here:"}
        id={'author'}
        type={'text'}
        value={author}
        handleChange={onChangeHandler}
      />
      <TextBox
        label={'Type Blog Post Here:'}
        id={'message'}
        type={'text'}
        value={message}
        handleChange={onChangeHandler}
        rows={'5'}
        cols={'40'}
      />
      <Button handleClick={submitPostToServer}>SUBMIT</Button>
    </form>
  )
}

EditPostForm.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  submitPostToServer: PropTypes.func.isRequired
}

export default EditPostForm