import { React, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'wouter';
import LogoBlue from "../assets/Logo_blue.png"

import "./Menu.css"

export const Menu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    return (
        <div className='menu-cont'>
            <button className='menu-btn flex align-middle justify-center items-center' onClick={toggleMenu}>
                <HiMenu className='menuIcon' />
            </button>
            <div id='menu' className={`menu ${isMenuOpen ? 'menu-in' : 'menu-out'}`}>
                <div className='menu-head'>
                    <button className='bg-transparent text-black' onClick={toggleMenu}>
                        <HiOutlineX className='' />
                    </button>
                </div>
                <div className='menu-links'>
                    <Link to='/' className='menu-link' onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link to='/building' className='menu-link' onClick={toggleMenu}>
                        Edificio
                    </Link>
                    <Link to='/development' className='menu-link' onClick={toggleMenu}>
                        Pisos
                    </Link>
                    <Link to='/contact' className='menu-link' onClick={toggleMenu}>
                        Contacto
                    </Link>
                </div>
                <div className='menu-bot'>
                    <img src={LogoBlue} className='my-4' alt='Logo' />
                    <h2 className='text-slate-600 text-lg font-bold'>PROPTECH</h2>
                    <div className='mediaIcons text-lg'>
                        <a className='web-link' href='https://www.facebook.com/'>
                            <FaSquareFacebook className='media-icon text-lg' />
                        </a>
                        <a className='web-link' href='https://www.instagram.com/'>
                            <FaInstagram className='media-icon' />
                        </a>
                        <a className='web-link' href='https://wa.me/'>
                            <FaWhatsapp className='media-icon' />
                        </a>
                    </div>
                    <div className='flex justify-center align-middle'>
                        <p className='web-link mx-auto'>2024 © <a className='web-link' href=''>PROPTECH.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
