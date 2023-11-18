import PropTypes from 'prop-types';

let i = 1;

export const CardAbout = ({ al }) => {

    return (
        <article className="about__article" key={i++ * 10}>
            <div className="about__content">
                <h3 className='about__subtitle'>{al.subTitle}</h3>
                <p>{al.descrription}</p>
            </div>
            <img src={`${al.img}`} alt="certificate" />
        </article>
    )
}

CardAbout.propTypes = {
    al: PropTypes.any
}