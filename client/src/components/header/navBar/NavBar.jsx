import React from 'react'
import logo from '../../../assets/logo.jpg'
import { Link, useNavigate} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='full'>
        <img className='logo' src={logo} alt="" />
        <div className='about'>
          <h3>О себе</h3>
          <h3>Познания</h3>
          <h3>Проекты</h3>
          <h3>Опыт работы</h3>
        </div>
        <nav className='reg'>
          <Link to='login'>Войти</Link>
          <Link to='register'>Регистрация</Link>
        </nav>
    </div>
  )
}

export default NavBar