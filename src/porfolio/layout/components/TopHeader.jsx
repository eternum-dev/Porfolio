import { Link, NavLink } from 'react-router-dom';
import { RedirectButton } from '../../components/RedirectButton';
import './topheader.css';
import { useNavBar } from '../../../hooks/useNavBar';
import { useRef } from 'react';
import { header } from '../../../data/layout'



export const TopHeader = () => {
    const haderRef = useRef(null);

    const { navRef, openMenuRef, closeMenuRef,
        showNav, isVisible } = useNavBar(haderRef);


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

            <RedirectButton to={header.button} />

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
