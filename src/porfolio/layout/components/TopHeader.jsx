import { useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RedirectButton } from '../../components/RedirectButton';
import { useNavBar } from '../../../hooks/useNavBar';
import { header } from '../../../data/layout'
import './topheader.css';


export const TopHeader = () => {
    const haderRef = useRef(null);

    const location = useLocation();

    const { navRef, openMenuRef, closeMenuRef,
        showNav, isVisible } = useNavBar(haderRef);

    const isContact = location.pathname.slice(1) === header.button
    
    return (
        <header
            className='header'
            ref={haderRef}
        >
            <Link className='header__link' to={`/#${header.link}`}>
                <img src="src\assets\logo.png" alt="logo" />
            </Link>

            <nav
                ref={navRef}
                className='header__nav'
            >
                <div className='navbar-links'>
                    {
                        header.navLink.map((navLink) => (
                            <NavLink
                                key={navLink.name}
                                to={`/#${navLink.to}`}
                                className={() => `navlink ${isVisible()}`}
                            >
                                {navLink.name}
                            </NavLink>
                        ))
                    }
                </div>
            </nav>
            {
                !isContact && <RedirectButton to={header.button} />
            }


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
