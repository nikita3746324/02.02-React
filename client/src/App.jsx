// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'
import Header from './components/header/Header'
import SkillCard from './components/body/SkillCard'


import { useState } from 'react'


import './App.css'
import Register from './components/header/navBar/register/Register'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'

import Login from './components/header/navBar/register/Login'
import Home from './components/header/navBar/register/Home'
import Layout from './components/header/navBar/register/Layout'
import NavBar from './components/header/navBar/NavBar'
import Body from './components/body/Body'
import SkillCardList from './components/body/SkillCardList'
import Statetests from './components/Teory/Statetests'
import Stateform from './components/Teory/Stateform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login'element={<Login/>}/>
        </Routes>
      </BrowserRouter> */}




      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login'element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path='/' element={<SkillCardList/>}/>
        </Routes>
      </BrowserRouter> */}

      <Stateform/>
    </>
  )
}

export default App
