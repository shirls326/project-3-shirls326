import React from 'react'
import './navbar.css'

export default function navbar() {
  return (
    <div className='navbar'>
        <div className='navBarLeft'>
            <h2>Beth</h2>

        </div>
        <div className='navBarText'>
            <h2 className='navlink'><a href='/#about'>About</a></h2>
            <h2 className='navlink'><a href='/gamesTimeline#games'>Games</a></h2>
            <h2 className='navlink'><a href='/gamesTimeline#timeline'>Timeline</a></h2>
        </div>
    </div>
  )
}
