import { useState } from 'react';
import PropTypes from 'prop-types';
import './cardAbout.css';



export const CardAbout = ({ data }) => {

    const [showData, setShowData] = useState(false);

    const handleShowData = () => {
        setShowData((prev) => !prev)
    }


    return (
        <article className="about__article" style={{height: !showData && '100%'}} >
            <div className="about__content" >
                <h3 className='about__subtitle'>{data.subTitle}</h3>
                <button
                    className='about__button'
                    onClick={handleShowData}>
                    <img src="#" alt={!showData ? 'abrir' : 'cerrar'} />
                </button>
                {
                    !showData && <p>{data.descrription}</p>
                }
            </div>
        </article>
    )
}

CardAbout.propTypes = {
    data: PropTypes.any
} 