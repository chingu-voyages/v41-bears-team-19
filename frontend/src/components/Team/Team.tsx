import React from 'react'
import TeamData from './teamData'
import './Team.css'

const Team = () => {
    
    const showTeamData = TeamData.map(member => {
        return <div className='team__card'>
            <img src={member.img} className='team__image' alt={member.name} />
            <p className='team__name'>{member.name}</p>
            <span>{member.role}</span>
        </div>
    })

  return (
    <section className='team'>
        <h2>Meet our team</h2>
        <div className='team__grid'>
            {showTeamData}
        </div>

    </section>
  )
}

export default Team