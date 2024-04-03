import PropTypes from 'prop-types';
import './tooltip.css'

export const Tooltip = ({ title, children}) => {
    return (
        <div className='tooltip' >
            {
                title && 
                    <span className='tooltip__text' >
                        {title}
                    </span>     
            }
            {
                children
            }
        </div>
    )
}

Tooltip.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
}