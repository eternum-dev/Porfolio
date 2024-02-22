
import PropTypes from 'prop-types';
import './cardAbout.css';
import { useRef } from 'react';

let i = 1;

export const CardAbout = ({ data }) => {
    const refContainer = useRef();

    const showCerticate = () => {
        refContainer.current.classList.toggle('active');
    }

    return (
        <article className="about__article" key={i++ * 10}>
            <div className="about__content">
                <h3 className='about__subtitle'>{data.subTitle}</h3>
                <p>{data.descrription}</p>
            </div>
            <button
                className='about__button'
                onClick={showCerticate}>
                <img src="#" alt="abrir" />
            </button>

            <div className='about__conteiner ' ref={refContainer}>
                <img src={`${data.img}`} alt="certificate" />
            </div>

        </article>
    )
}

CardAbout.propTypes = {
    data: PropTypes.any
}