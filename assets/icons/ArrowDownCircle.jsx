import PropTypes from 'prop-types';



export const ArrowDownCircle = ({ size = '32' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            strokeWidth="1.5"
            color="#856b47"
            viewBox="0 0 24 24"
            className='isAnimate'
        >
            <path
                stroke="#856b47"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18m0 0l8.5-8.5M12 21l-8.5-8.5"
            ></path>
        </svg>
    );

}

export default ArrowDownCircle;


ArrowDownCircle.propTypes = {
    size: PropTypes.string
}