import { useState } from 'react'

import logo from '../../assets/logo.png'
import './style.sass'

import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

export function Navbar(){
  const [toggleMenu, setToggleMenu] = useState(false) 


  return(
    <nav className="bemvi__navbar">
      <div className="bemvi__navbar-logo">
        <img src={logo} alt="Logo Bemvi" />
        <h1>BemVi Confeitaria</h1>
      </div>
      <ul className='bemvi__navbar-links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Quem Somos</a></li>
        <li><a href="history">Nossa História</a></li>
        <li><a href="gallery">Galeria</a></li>
        <li><a href="contact">Contato</a></li>
      </ul>

      <div className="bemvi__navbar-smallscreen">
        <GiHamburgerMenu 
        className='overlay__open'
        color='#fff' 
        fontSize={27} 
        onClick={() => setToggleMenu(true)}
        />
      
      {toggleMenu && (
        <div className="bemvi__navbar-smallscreen_overlay">
          <AiOutlineClose
            className='overlay__close'
            color='#FFF' 
            fontSize={27} 
            onClick={() => setToggleMenu(false)}
          />
           <ul className='bemvi__navbar-smallscreen_links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Quem Somos</a></li>
            <li><a href="history">Nossa História</a></li>
            <li><a href="gallery">Galeria</a></li>
            <li><a href="contact">Contato</a></li>
          </ul>
        </div>
      )}
      </div>
    </nav>

  )
}