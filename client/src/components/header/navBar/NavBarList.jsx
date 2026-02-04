import React from 'react'
import { navbarus } from './NavBar'
import NavBar from './NavBarr'
import logo from '../../../assets/images/logo.jpg'

const NavBarList = () => {
  return (
    <div style={{display:'flex', gap:'30px'}}>
        <img src={logo} alt="" />
        <div style={{display:'flex', gap:'30px',marginLeft:'100px'}}>
            {navbarus.map(item =>(
                <NavBar key={navbarus.id} navbarus={item}/>
            ))}
        </div>
        <div style={{display:'flex', gap:'30px',marginLeft:'300px'}}>
            <button>Войти</button>
            <button>Зарегистрироваться</button>  
        </div>

    </div>

  )
}

export default NavBarList