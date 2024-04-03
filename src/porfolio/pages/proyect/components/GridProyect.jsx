import { useState } from 'react';
// import { CardProyect } from './CardProyect';
import './gridProyect.css';

import PropTypes from 'prop-types';
import { Card } from '../../../components/Card';
import { Link } from 'react-router-dom';


let i = 0;

export const GridProyect = ({ allProyect }) => {

    const [isVisible, setIsVisible] = useState(false);


    return (
        <>
            <h2>work</h2>
            <section className="proyect__grid">
                {
                    allProyect.map(proyect => (
                        <Card
                            key={i++}
                            data={proyect}
                            isHover={true} />
                    ))
                }
            </section>

            <h2>Practicas, ejercicios, otros</h2>
            <div className='proyect__option'>
                <button
                    className='proyect__btn'
                    onClick={() => setIsVisible(prev => !prev)}
                >
                    {!isVisible ? 'abrir' : 'cerrar'}
                </button>
                <div className="proyect__grid"
                    style={{ display: !isVisible && 'none' }}
                >
                    {
                        isVisible && (
                            allProyect.map(proyect => (
                                <Link key={proyect.repository} >
                                    <Card
                                        data={proyect}
                                        isHover={true} />
                                </Link>

                            ))
                        )
                    }
                </div>
            </div>
        </>

    )
}

GridProyect.propTypes = {
    allProyect: PropTypes.any
};

