import PropTypes from 'prop-types';


export const Email = ({ size = '32' }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            strokeWidth="1.5"
            color="#856b47"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#856b47"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 9l4.5 3L14 9"
            ></path>
            <path
                stroke="#856b47"
                strokeLinecap="round"
                d="M17 19H3a2 2 0 01-2-2V7a2 2 0 012-2h13a2 2 0 012 2v2"
            ></path>
            <path
                stroke="#856b47"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M23 14h-6m0 0l3-3m-3 3l3 3"
            ></path>
        </svg>
    );
}

export default Email;

Email.propTypes = {
    size: PropTypes.string
}