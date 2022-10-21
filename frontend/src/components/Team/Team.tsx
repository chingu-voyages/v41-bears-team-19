import React from 'react'
import TeamAvatar from '../../images/team.png'
import './Team.css'

const Team = () => {
  return (
    <section className='team'>
        <h2>Meet our team</h2>
        <br/>
        <br/>
        <div className='team__grid'>
            <div className='team__card'>
                <img src={TeamAvatar} />
                <div className='team__name'>
                    Amanda Vieira
                    <br/>
                    Front End Developer
                </div>
            </div>

            <div className='team__card'>
                <img src={TeamAvatar} />
                <div className='team__name'>
                    Devin Jaggernauth
                    <br/>
                    Front End Developer
                </div>
            </div>

            <div className='team__card'>
                <img src={TeamAvatar} />
                <div className='team__name'>
                    Henryque Lucena
                    <br/>
                    Back End Developer
                </div>
            </div>

            <div className='team__card'>
                <img src={TeamAvatar} />
                <div className='team__name'>
                    Federico Chave
                    <br/>
                    Back End Developer
                </div>
            </div>

            <div className='team__card'>
                <img src={TeamAvatar} />
                <div className='team__name'>
                    Henryque Lucena
                    <br/>
                    Back End Developer
                </div>
            </div>
        </div>

    </section>
  )
}

export default Team