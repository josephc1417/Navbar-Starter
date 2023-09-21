import {links,social} from '../data'
import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../assets/logo.svg'

export const Navbar = () => {
const [showLinks, setShowLinks] = useState(false)    

const toggleLinks = () => {
setShowLinks(!showLinks)
}

return (
    <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <img  src={logo} className='logo' alt='logo'/>
                <button  className='nav-toggle' type='' onClick={toggleLinks}>
                    <FaBars />
                </button >
            </div>
            {showLinks &&(
                <div className='links-container'>
                    <ul className='links'>
                    {links.map((link) => {
                    return(
                        <li key={link.id}>
                            <a href={link.url} />
                            <p>{link.text}</p>
                        </li>
                    )
                    })}
                    </ul>
                </div>
            )}
        </div>
        
    </nav>
)
}
