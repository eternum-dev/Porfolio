import { Link, NavLink } from 'react-router-dom';
import './footer.css';


export const Footer = () => {
    return (
        <footer className='footer'>
            <Link className='footer__link' to="/home" >
                <img src="src\assets\logo.png" alt="logo" />
            </Link>
            <nav className='footer__nav'>
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
                    about
                </NavLink>
                <NavLink
                    to='/skills'
                    className={({ isActive }) => `navlink ${isActive ? 'isActive' : ''}`}
                >
                    skills
                </NavLink>
            </nav>
            <div className='footer__social'>
                <h4>redes</h4>
                <ul className='footer__ul'>
                    <Link to='https://www.linkedin.com/in/alejandrothon/' target='_blank'>
                        <img
                            src="src\assets\icons\LinkedIn.svg"
                            alt="linkedin"
                            className='footer__icon'
                        />
                    </Link>
                    <Link to='https://github.com/eternum-dev' target='_blank'>
                        <img
                            src="src\assets\icons\GitHub.svg"
                            alt="gitHub"
                            className='footer__icon'
                        />
                    </Link>
                </ul>
            </div>
        </footer>
    )
}