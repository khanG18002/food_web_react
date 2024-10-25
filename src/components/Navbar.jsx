import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='flex justify-center bg-black text-white   gap-x-4'>
            <Link to="/">Head</Link>
            <Link to="/topcontributer">contributer</Link>
            <Link to="/head">reciepe</Link>
        </div>
    )
}

export default Navbar
