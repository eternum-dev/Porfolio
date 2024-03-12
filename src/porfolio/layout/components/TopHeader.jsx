import { Link, NavLink, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { ContactButton } from '../../components/ContactButton';
import { useScrollNavigate } from '../../../hooks/useScrollNavigate';
import './topheader.css';




export const TopHeader = () => {

    const location = useLocation();

    const navRef = useRef();
    const openMenuRef = useRef();
    const closeMenuRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('navBar');

        openMenuRef.current.classList.toggle('disable');
        closeMenuRef.current.classList.toggle('disable');
    }

    useScrollNavigate();


    // const scrollEvent = () => {
    //     // console.log(window.scrollY);
    // }
    // window.addEventListener('scroll', scrollEvent);

    const functi = (proyects) => {
        const hash = location.hash.slice(1);
        if (hash === proyects) {
            return 'isActive'
        }
        return ''
    }

    const proyects = 'proyect';


    const scrollEvent = () => {
        // console.log(window.scrollY);
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

                        to={`/#${proyects}`}
                        className={() => `navlink ${functi(proyects)}`}
                    >
                        proyect
                    </NavLink>
                    <NavLink
                        to='/#skills'
                        className={({ isActive }) => `navlink ${isActive ? 'isActive' : ''}`}
                    >
                        skills
                    </NavLink>
                    <NavLink
                        to='/#about'
                        className={({ isActive }) => `navlink ${isActive ? 'isActive' : ''}`}
                    >
                        about me
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
