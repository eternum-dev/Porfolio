import { CardAbout } from './CardAbout';
import './sectionAbout.css';
import PropTypes from 'prop-types';


let i = 1;

export const SectionAbout = ({ abouts }) => {
    return (
        <div className='about'>
            {
                abouts.map(about => (
                    <section className="about__section" key={i++}>
                        <h2 className="about__title">{about.name}</h2>
                        <div className="about__grid-container">
                            {
                                about.contenedor.map(data => (
                                    <CardAbout data={data} key={data.name} />
                                ))
                            }

                        </div>
                    </section>
                ))
            }
        </div>
    )
}



SectionAbout.propTypes = {
    abouts: PropTypes.any
}