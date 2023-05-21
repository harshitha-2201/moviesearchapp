import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'


const Navbar = () => {

    const [Mobile , setMobile] = useState(false)
  return (
    <nav className='nabar'>
      
        <h2 className='logo'>React Movie App</h2>
        <ul className= {Mobile ? 'nav-links-mobile' : 'nav-links'} onClick ={() => setMobile(false)}>
            <Link to = '/'   className='no-underline'><li>Home</li></Link>
            <Link to = '/about' className='no-underline'><li>About</li></Link>
        </ul>

        <button className='mobile-menu-icon button-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <ImCross/> : <FaBars/>}
        </button>
     
    </nav>
  )
}

export default Navbar