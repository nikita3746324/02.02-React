import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'
import Header from './components/header/Header'
import SkillCard from './components/SkillCard'
import SkillCardList from './components/SkillCardList'
import NavBarList from './components/header/navBar/NavBarList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarList/>
    </>
  )
}

export default App
