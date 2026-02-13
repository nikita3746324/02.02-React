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
            <h2>Страница входа</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Логин</label>
                    <input
                    value={form.username}
                    onChange={(e) => setForm({...form,username:e.target.value})}
                    placeholder='User'/>
                </div>
                <div>
                    <label>Пароль</label>
                    <input
                    value={form.password}
                    onChange={(e) => setForm({...form,password:e.target.value})}
                    placeholder='Пароль'/>
                </div>
                <button>Войти</button>
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