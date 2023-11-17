import './sectionAbout.css';
import PropTypes from 'prop-types';


let i = 1;

export const SectionAbout = ({ abouts }) => {
    return (
        <>
            {
                abouts.map(about => (
                    <section className="about__section" key={i++}>
                        <h2 className="about__title">{about.name}</h2>
                        <div className="about__grid-container">
                            {
                                about.algo.map(al => (
                                    <article className="about__article" key={i++ * 10}>
                                        <div className="about__content">
                                            <h3 className='about__subtitle'>{al.subTitle}</h3>
                                            <p>{al.descrription}</p>
                                        </div>
                                        <img src={`${al.img}`} alt="certificate" />
                                    </article>
                                ))
                            }

                        </div>
                    </section>
                ))
            }
        </>
    )
}



SectionAbout.propTypes = {
    abouts: PropTypes.any
}