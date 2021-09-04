import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav>
                <ul className=''>
                    <li className=''>
                        <Link to="/">Home</Link>
                    </li>
                    <li className=''>
                        <Link to="/starred">Stareed</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
