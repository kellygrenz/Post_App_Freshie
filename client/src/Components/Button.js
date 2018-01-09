import React from 'react'
import PropTypes from 'prop-types'

const style = {
  button: {
    display: 'flex',
    background: '#3BC5AA',
    width: '200px',
    padding: '10px',
    alignItems: 'center',
    flexDirection: 'column',
    border: 'none',
    fontFamily: 'Yanone Kaffeesatz, sans-serif',
    fontSize: '18px',
    color: '#fff',
    borderRadius: '0'
  }
}

const Button = ({ handleClick, children }) => {
  return (
    <button style={style.button} onClick={handleClick}>{children}</button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Button