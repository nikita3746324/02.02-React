import React from 'react'
import python from '../assets/python.svg'
import './SkillCard.css'

const SkillCard = ({skillcard}) => {
  return (
    <div className='skillcard'>
        <img src={python} alt="" className='iconstack'/>
        <div className='content'>
            <h3>{skillcard.title}</h3>
            <p>{skillcard.content}</p>
            <div>
                <button>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default SkillCard