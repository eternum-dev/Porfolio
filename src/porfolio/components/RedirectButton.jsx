import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import './redirectButton.css';

export const RedirectButton = ({ to }) => {
    return (
        <>
            <NavLink
                className='redirectButton'
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