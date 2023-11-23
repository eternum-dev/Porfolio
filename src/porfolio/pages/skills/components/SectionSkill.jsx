import PropTypes from 'prop-types';
import './sectionSkill.css';
import { CardSkill } from './CardSkill';

let i = 1;
export const SectionSkill = ({ stack }) => {
    return (
        <section key={i++} className="skill__section">
            <h2 className="skill__title">{stack.nameCategory}</h2>
            <div className='skill__container'>
                {
                    stack.technology.map(technology => (
                        <CardSkill technology={technology} key={technology.name}/>
                    ))
                }

            </div>

        </section>
    )
}


SectionSkill.propTypes = {
    stack: PropTypes.shape({
        nameCategory: PropTypes.string.isRequired,
        technology: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired
};