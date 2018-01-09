import React from 'react'
import PropTypes from 'prop-types'

const style = {
  label: {
    fontFamily: 'Yanone Kaffeesatz, sans-serif',
    color: '#fff',
    fontSize: '24px',
    textAlign: 'center'
  },
  input: {
    padding: '15px',
    width: '400px'
  }

}

const Fields = ({ label, id, type, value, handleChange }) => {
  return (
    <div>
      <h3 style={style.label}>{label}</h3>
      <input style={style.input} id={id} type={type} value={value} onChange={handleChange} />
    </div>
  )
}

Fields.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default Fields