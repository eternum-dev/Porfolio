import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


export const Networks = ({ path = null, classname = '', name = '', children }) => {
    return (
        <>
            <Link
                to={path}
                className={classname}
                target='_blank'
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                {name &&
                    <span
                        style={{ textTransform: 'capitalize', margin: '.5rem,' }}
                    >
                        {name}
                    </span>
                }
                {children}
            </Link>
        </>
    )
}


Networks.propTypes = {
    alt: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    classname: PropTypes.any,
    name: PropTypes.string,
    children: PropTypes.any
}