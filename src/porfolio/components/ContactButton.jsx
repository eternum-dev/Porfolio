import {  NavLink } from 'react-router-dom'
import './contactButton.css';

export const ContactButton = () => {
    return (
        <>
            <NavLink
                className='button header__button'
                to='/contact'> Contact
            </NavLink>
        </>
    )
}