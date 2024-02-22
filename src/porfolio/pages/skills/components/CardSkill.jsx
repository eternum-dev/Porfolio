import PropTypes from 'prop-types';
import './cardSkill.css';

export const CardSkill = ({ technology }) => {
    return (
        <article key={technology.name} className='cardSkill'>
            <header className='cardSkill__header'>
                <h3 className='cardSkill__title'>{technology.name}</h3>
            </header>
            <img className='cardSkill__img' src={technology.icon} alt={technology.name} />
        </article>
    )
}

CardSkill.propTypes = {
    technology: PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }).isRequired
};
