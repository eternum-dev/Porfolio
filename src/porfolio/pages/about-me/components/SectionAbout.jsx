import { Card } from '../../../components/Card';
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
                                    <Card data={data} key={data.name} >
                                        {
                                            data.centro &&
                                            <p style={{ marginTop: '1rem', color: 'var(--tobacco-brown-200)' }}> Centro de estudio: {data.centro}</p>
                                        }
                                    </Card>
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