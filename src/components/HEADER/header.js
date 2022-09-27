import React from 'react'
import './header.css'
import Logo from '../../assets/notas.png'

const Header = () => {
    return(
        <>
           <header id="header" className="header">
                <nav className="header-navbar">
                    <div className="container-fluid">
                        <img src={Logo} className='header-logo' alt='Logo'/>
                        <div className='header-title'>App Notes</div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header