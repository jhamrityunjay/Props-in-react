import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <li>Home</li>
      <li>About</li>
      <li>Contect</li>     
    </div>
  )
}

export default Header
