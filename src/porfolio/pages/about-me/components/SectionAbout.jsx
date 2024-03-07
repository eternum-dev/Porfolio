import { CardAbout } from './CardAbout';
import './sectionAbout.css';
import PropTypes from 'prop-types';


export const SectionAbout = ({ abouts }) => {
  
    return (
        <div className='about'>
            {
                abouts.map(about => (
                    <section className="about__section" key={about.name}>
                        <h2 className="about__title">{about.name}</h2>
                        <div className="about__grid-container">
                            {
                                about.contenedor.map(data => (
                                    <CardAbout data={data} key={data.subTitle} />
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