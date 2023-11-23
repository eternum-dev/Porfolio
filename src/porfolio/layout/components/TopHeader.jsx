import { Link, NavLink } from 'react-router-dom';
import './topheader.css';



export const TopHeader = () => {

    return (
        <header className='header'>
            <Link className='header__link' to="/home">
                <img src="src\assets\logo.png" alt="logo" />
            </Link>
            
            <nav className='header__nav'>
                <NavLink
                    to='/proyect'
                    className={({ isActive }) => `navlink ${isActive ? 'isActive' : ''}`}
                >
                    proyect
                </NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive }) => `navlink ${isActive ? 'isActive' : ''}`}
                >
                    about me
                </NavLink>
                <NavLink
                    to='/skills'
                    className={({ isActive }) => `navlink ${isActive ? 'isActive' : ''}`}
                >
                    skills
                </NavLink>
                <NavLink
                    to='/contact'
                    className={({ isActive }) => `navlink ${isActive ? 'isActive' : ''}`}
                >
                    contact
                </NavLink>


            </nav>
            <button className='header__button'>contact</button>
        </header>
    )
}
