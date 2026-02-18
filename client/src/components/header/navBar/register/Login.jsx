import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [form,setForm] = useState({
        username:'',
        password:''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/profile')};

    return (
        <div className='glav'>
            <div className='strvhod'>
               <h2>Страница входа</h2> 
            </div>
            <form onSubmit={handleSubmit}>
                <div className='logindesing'>
                    <label>Логин</label>
                    <input
                    value={form.username}
                    onChange={(e) => setForm({...form,username:e.target.value})}
                    placeholder='login'/>
                </div>
                <div className='logindesing'>
                    <label>Пароль</label>
                    <input
                    value={form.password}
                    onChange={(e) => setForm({...form,password:e.target.value})}
                    placeholder='password'/>
                </div>
                <div className='buttonlog'>
                   <button>Войти</button> 
                </div>
                
            </form>
            <p>У вас нет аккаунта? <Link to='/register'>Зарегистрироваться</Link></p>
            <p>
                {/* <button>Вернуться на главную страницу</button> */}
                <Link to='/'>Вернуться на главную страницу</Link>
            </p>

        </div>
    )
}

export default Login