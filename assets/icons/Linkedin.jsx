import PropTypes from 'prop-types';



export const Linkedin = ({ size = '32' }) => {

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
        d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
      ></path>
      <path
        stroke="#856b47"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
      ></path>
    </svg>
  );
}

export default Linkedin;

Linkedin.propTypes = {
  size: PropTypes.string
}