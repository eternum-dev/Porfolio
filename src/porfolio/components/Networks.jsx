import { Link } from "react-router-dom"
import PropTypes from 'prop-types';


export const Networks = ({ alt, path = null, classname = '' }) => {
    return (
        <div>
            <Link to={path} className={classname}  target='_blank' >
                <img src={`src/assets/icons/${alt}.svg`} alt={alt} className='contact__icon' />
            </Link>
        </div>
    )
}



Networks.propTypes = {
    alt: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    classname: PropTypes.any
}