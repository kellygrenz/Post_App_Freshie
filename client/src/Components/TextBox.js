import React from 'react'
import PropTypes from 'prop-types'


const style = {
  label: {
    fontFamily: 'Yanone Kaffeesatz, sans-serif',
    color: '#fff',
    fontSize: '24px'
  },
  textBox: {
    resize: 'none',
    padding: '15px',
    width: '400px'
  }

}

const Input = ({ label, id, type, value, handleChange }) => {
  return (
    <div>
      <h3 style={style.label}>{label}</h3>
      <textarea style={style.textBox} rows='20' id={id} type={type} value={value} onChange={handleChange}  />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
  
}

export default Input