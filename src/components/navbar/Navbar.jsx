import React from 'react'
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navContainer}>
        <span className={style.logo}>Sharmabooking</span>
        <div className={style.navItems}>
            <button className={style.navbtn} >Register</button>
            <button className={style.navbtn} >Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
