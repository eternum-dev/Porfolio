import PropTypes from 'prop-types';
import './cardSkill.css';
import { Tooltip } from '../../../components/Tooltip';

export const CardSkill = ({ technology }) => {
    return (
        <article key={technology.name} className='cardSkill'>
            <Tooltip title={technology.name}>
                <header className='cardSkill__header'>
                    <h3 className='cardSkill__title'>{technology.name}</h3>
                </header>
            </Tooltip>

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
