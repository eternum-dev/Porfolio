import { Link, NavLink } from 'react-router-dom';
import './footer.css';
import { footer, header } from '../../../data/layout';






export const Footer = () => {
    return (
        <footer className='footer'>
            <Link className='footer__link' to={`#${footer.link}`} >
                <img src="src\assets\logo.png" alt="logo" />
            </Link>
            <nav className='footer__nav'>
                {
                    header.navLink.map((navlink) => (
                        <NavLink
                            key={navlink.name}
                            to={`/${navlink.to}`}
                            className={() => `navlink`}
                        >
                            {navlink.name}
                        </NavLink>
                    ))
                }
            </nav>
            <div className='footer__social'>
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