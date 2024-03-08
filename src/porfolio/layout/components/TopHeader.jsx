import { Link, NavLink } from 'react-router-dom';
import './topheader.css';
import { ContactButton } from '../../components/ContactButton';
import { useRef } from 'react';
import { useScrollNavigate } from '../../../hooks/useScrollNavigate';



export const TopHeader = () => {
    const navRef = useRef();
    const openMenuRef = useRef();
    const closeMenuRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('navBar');

        openMenuRef.current.classList.toggle('disable');
        closeMenuRef.current.classList.toggle('disable');
    }

    useScrollNavigate();
    const scrollEvent = () => {
        console.log(window.scrollY);
    }
    window.addEventListener('scroll', scrollEvent);

    return (
        <header
            className='header'
        >
            <Link className='header__link' to="/#home">
                <img src="src\assets\logo.png" alt="logo" />
            </Link>

            <nav
                ref={navRef}
                className='header__nav'
            >
                <div className='navbar-links'>
                    <NavLink
                        to='/#proyect'
                        className={({ isActive, }) => `navlink ${isActive ? 'isActive' : ''}`}
                    >
                        proyect
                    </NavLink>
                    <NavLink
                        to='/#about'
                        className={({ isActive }) => `navlink ${isActive ? 'isActive' : ''}`}
                    >
                        about me
                    </NavLink>
                    <NavLink
                        to='/#skills'
                        className={({ isActive }) => `navlink ${isActive ? 'isActive' : ''}`}
                    >
                        skills
                    </NavLink>

                    <div className='hr'></div>

                    <ContactButton />
                </div>

            </nav>
            <ContactButton />
            <button onClick={showNav} className='navBar__button'>

                <img src="src\assets\icons\hamburger-open.svg"
                    alt="hamburger open"
                    className='navBar__hamburger'
                    ref={openMenuRef}

                />
                <img src="src\assets\icons\hamburger-close.svg"
                    alt="hamburger close"
                    className='navBar__hamburger navBar__hamburger--rotate disable'
                    ref={closeMenuRef}
                />
            </button>
        </header>
    )
}
