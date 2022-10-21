import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>

        <div className='footer__team'>
            <h2>Team</h2>
            <br/>
            <p><a href="https://www.linkedin.com/in/amandavieiradev/">Amanda Vieira</a></p>
            <p><a href="https://www.linkedin.com/in/devin-jaggernauth/">Devin Jaggernauth</a></p>
            <p><a href="https://www.linkedin.com/in/henryque-lucena/">Henryque Lucena</a></p>
            <p><a href="#">Muadd Ahmed</a></p>
            <p><a href="https://github.com/fedechaves">Federico Chave</a></p>
        </div>

        <div className='footer__about'>
        <h2>About this project</h2>
        <br/>
        <p>This is a voluntary project made as part of Chingu’s Voyage v41, a cohort of developers that join to create web apps collaboratively. See our source code here.
        To know more about Chingu’s mission, click here.</p>
        </div>

    </footer>
    

  )
}

export default Footer