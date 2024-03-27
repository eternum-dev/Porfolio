import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import './redirectButton.css';

export const RedirectButton = ({ to }) => {
    return (
        <>
            <NavLink
                className='button header__button'
                to={`/${to}`}
                style={{ textTransform: 'capitalize' }}
            >
                {to}
            </NavLink>
        </>
    )
}


RedirectButton.propTypes = {
    to: PropTypes.string.isRequired
}