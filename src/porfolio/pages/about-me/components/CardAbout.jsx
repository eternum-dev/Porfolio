
import PropTypes from 'prop-types';
import './cardAbout.css';
import { useRef } from 'react';


export const CardAbout = ({ data }) => {
    const refContainer = useRef();

    const showCerticate = () => {
        refContainer.current.classList.toggle('active');
    }

    return (
        <article className="about__article"  >
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