import React from 'react'
import { navbarus } from './NavBar'
import NavBar from './NavBarr'
import logo from '../../../assets/logo.jpg'

const NavBarList = () => {
  return (
    <div style={{display:'flex',gap:'600px'}}>
        <img src={logo} height={100} style={{marginLeft:'30px'}}/>
        <div style={{display:'flex',gap:'30px'}}>
            {navbarus.map(item =>(
                <NavBar key={navbarus.id} navbarus={item}/>
            ))}
        </div>
        <div style={{display:'flex',gap:'10px'}}>
            <button>Войти</button>
            <button>Зарегистрироваться</button>  
        </div>

    </div>

  )
}

export default NavBarList