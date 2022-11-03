import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer__team'>
            <h2>Team</h2>
            <p><a href="https://www.linkedin.com/in/amandavieiradev/" target="_blank" rel="noopener noreferrer">Amanda Vieira</a></p>
            <p><a href="https://www.linkedin.com/in/devin-jaggernauth/" target="_blank" rel="noopener noreferrer">Devin Jaggernauth</a></p>
            <p><a href="https://www.linkedin.com/in/muaad-ahmed-a84a58157/" target="_blank" rel="noopener noreferrer">Muadd Ahmed</a></p>
            <p><a href="https://github.com/fedechaves" target="_blank" rel="noopener noreferrer">Federico Chaves</a></p>
        </div>

        <div className='footer__about'>
        <h2>About this project</h2>
        <p>This is a voluntary project made as part of Chingu’s Voyage v41, a cohort of developers that join to create web apps collaboratively. See our source code here.
        To know more about Chingu’s mission, click here.</p>
        </div>
    </footer>
    

  )
}

export default Footer