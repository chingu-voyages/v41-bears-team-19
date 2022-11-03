import React from 'react'
import './Hero.css'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <h1>Find your next friend</h1>
            <h2>Adopt pets in your area or help animal shelters.</h2>

            <NavLink to={"/search"}><button>Start here</button></NavLink>
        </div>
    )
}

export default Hero