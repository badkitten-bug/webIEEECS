import React,{useState} from 'react'
import '../style-sheets/Header.css';

const Header = () => {
    const[active,setActive]=useState("nav_menu");
    const[toggleIcon,setToggleIcon]=useState("nav_toggler");
    const navToggle=()=>{
        active==='nav_menu'? setActive('nav_menu nav_active'):setActive('nav_menu');

        toggleIcon==='nav_toggler'? setToggleIcon('nav_toggler toggle'):setToggleIcon('nav_toggler');
    }
  return (
    <nav className="nav">
        <a href='#' className='nav_brand'><img className='img_brand' src='./src/assets/imagenes/logo-header.jpg' alt='logo de ieee cs'></img></a>
        <ul className={active}>
            <li className='nav_item'><a href="#" className="nav_item">Inicio</a></li>
            <li className='nav_item'><a href="#" className="nav_item">Nosotros</a></li>
            <li className='nav_item'><a href="#" className="nav_item">Eventos</a></li>
            <li className='nav_item'><a href="#" className="nav_item">contáctanos</a></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
  )
}

export default Header