import React from 'react'
import { skillcards } from './data'
import SkillCard from './SkillCard'

const SkillCardList = () => {
  return (
    <div style={{display:'flex',flexWrap:'wrap',marginTop:'100px'}}>
        {skillcards.map(item =>(
            <SkillCard key={item.id} skillcard={item}/>
        ))}
    </div>
  )
}

export default SkillCardList