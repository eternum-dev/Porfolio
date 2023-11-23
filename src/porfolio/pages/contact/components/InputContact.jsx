import PropTypes from 'prop-types';


export const InputContact = ({input}) => {
    return (
        <>
            <label htmlFor="" className='contact__label'>{input.name}</label>
            <input type="text" className='contact__input' />
        </>
    )
}


InputContact.propTypes =  {
    input: PropTypes.arrayOf
}