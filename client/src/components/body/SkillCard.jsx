import React from 'react'
import python from '../../assets/python.svg'
import javascript from '../../assets/js.svg'
import reactsvg from '../../assets/react.svg'
import djangosvg from '../../assets/django.svg'

import './SkillCard.css'

const SkillCard = ({skillcard}) => {
  return (
    <div className='skillcard'>
        <img src={skillcard.image} alt="" className='iconstack'/>
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