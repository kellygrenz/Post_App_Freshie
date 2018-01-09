import React from 'react'
import PropTypes from 'prop-types'
import Button from './Components/Button'
import Fields from './Components/Fields'
import TextBox from './Components/TextBox'

const style = {
  container: {
    backgroundColor: '#EC644B',
    margin: '5%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  titles: {
    fontFamily: 'Candal, sans-serif',
    color: '#fff',
    fontSize: '20px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center'
  },
}

const CreatePostForm = ({ onChangeHandler, handleSubmit }) => {
  return (
    <div style={style.container}>
      <form>
        <Fields
          label={'Post Title'}
          id={'title'}
          type={'text'}
          handleChange={onChangeHandler}
        />
        <Fields
          label={'Enter Image URL:'}
          id={'img'}
          type={'text'}
          handleChange={onChangeHandler}
        />
        
        <TextBox
          label={'Tell Us About It:'}
          id={'message'}
          type={'text'}
          handleChange={onChangeHandler}
        
        />
        <Button handleClick={handleSubmit}>Publish This Post</Button>
      </form>
    </div>
  )
}

CreatePostForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default CreatePostForm