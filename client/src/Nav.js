import React from 'react'
import {
  Link
} from 'react-router-dom'

const style = {
  container: {
    display: 'flex',
    
    backgroundColor: '#171f2b',
    paddingTop: 20,
    paddingBottom: 20
    
  },
  nav: {
    display: 'flex',
    width: '30%',
    justifyContent: 'flex-end'
  },
  link: {
    color: '#fff',
    fontFamily: 'Yanone Kaffeesatz, sans-serif',
    textDecoration: 'none',
    fontSize: '18px',
    marginLeft: '20px'
  }
}

const Nav = () =>
  <div style={style.container}>
    <nav style={style.nav}>
      <Link style={style.link} to='/posts'> Blog Feed </Link>
      <Link style={style.link} to='/create-post'> Create a Post </Link>
    </nav>
  </div>

export default Nav
