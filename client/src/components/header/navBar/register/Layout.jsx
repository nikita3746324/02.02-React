import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
    return (
    <div className='mainhead'>
            <div className='header'>
            <img className='logo' src="https://s82079.cdn.ngenix.net/brands/rostics.svg" alt="" />
            <nav className='layout'>
                <Link className='navlink' to='/'>Главная</Link>
                <Link className='navlink' to='/Login'>Вход</Link>
                <Link className='navlink' to='/register'>Регистрация</Link>
                <Link className='navlink' to='/profile'>Профиль</Link>
                <Link className='navlink' to='/about'>О нас</Link>
            </nav>
            {/* <Outlet></Outlet> */}
        </div>
    </div>
        
    )
}

export default Layout