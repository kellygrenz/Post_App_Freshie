import React from 'react'
import {
  Link
} from 'react-router-dom'

const style = {
  container: {
    display: 'flex',
    
    backgroundColor: '#171f2b'
  
    
  },
  nav: {
    display: 'flex',
    width: '30%',
    justifyContent: 'flex-end',
    marginTop: '40px',
    marginLeft: '400px'
  },
  link: {
    color: '#fff',
    fontFamily: 'Yanone Kaffeesatz, sans-serif',
    textDecoration: 'none',
    fontSize: '18px',
    marginLeft: '20px'
  },
  logo: {
    marginLeft: '30px',
    width: '300px'
  }
}

const Nav = () =>
  <div style={style.container}>
    <div style={style.logo}>
    <img src="images/logo.png" />
    </div>
    <nav style={style.nav}>
      <Link style={style.link} to='/posts'> Blog Feed </Link>
      <Link style={style.link} to='/create-post'> Create a Post </Link>
    </nav>
  </div>

export default Nav
