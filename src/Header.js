import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div>
      <div>
        <div>
          <img className='ui image' alt='logo speakers 237' src={`./images/bw/SVCClogo.jpg`} />
        </div>
        <div className='ui huge menu'>
          <Link className='item' to='/'> Acceuil
          </Link>
          <Link className='item' to='/message'> Laisser un message
          </Link>
          <Link className='item' to='/about'> A propos
          </Link>
          <div class='right menu'>
            <Link className='item' to='/donate'> Faire un don
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
