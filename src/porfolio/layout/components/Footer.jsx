import { Link } from 'react-router-dom';
import './footer.css';


export const Footer = () => {
    return (
        <footer className='footer'>
            <Link className='footer__link' to="/home" >
                <img src="#" alt="logo" />
            </Link>
            <nav className='footer__nav'>
                <h4>pages</h4>
                <ul className='footer__ul'>
                    <li className='footer__li'>social</li>
                    <li className='footer__li'>about</li>
                    <li className='footer__li'>redes</li>
                    <li className='footer__li'>otro</li>
                </ul>
            </nav>
            <div className='footer__social'>
                <h4>redes</h4>
                <ul className='footer__ul'>
                    <li><Link><img src="#" alt="linkedin" /></Link></li>
                    <li><Link><img src="#" alt="gitHub" /></Link></li>
                </ul>
            </div>
        </footer>
    )
}