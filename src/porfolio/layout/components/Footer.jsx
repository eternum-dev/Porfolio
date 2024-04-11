import { Link, NavLink } from 'react-router-dom';
import { footer, header } from '../../../data/layout';
import { Networks, Linkedin, Github  } from '../../components';
import './footer.css';




export const Footer = () => {
    return (
        <footer className='footer'>
            <Link
                className='footer__link'
                to={`#${footer.link}`}
            >
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
                    <Networks alt='linkedin' path='https://www.linkedin.com/in/alejandrothon/' >
                        <Linkedin />
                    </Networks>
                    <Networks alt='github' path='https://github.com/eternum-dev'>
                        <Github  />
                    </Networks>
                </ul>
            </div>
        </footer>
    )
}