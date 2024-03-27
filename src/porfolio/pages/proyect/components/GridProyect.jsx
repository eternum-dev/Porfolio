import { useState } from 'react';
import { CardProyect } from './CardProyect';
import './gridProyect.css';

import PropTypes from 'prop-types';


let i = 0;

export const GridProyect = ({ allProyect }) => {

    const [isVisible, setIsVisible] = useState(false);


    return (
        <>
            <h2>work</h2>
            <section className="proyect__grid">
                {
                    allProyect.map(proyect => (
                        <CardProyect key={i++} proyect={proyect} />
                    ))
                }
            </section>

            <h2>Practicas, ejercicios, otros</h2>
            <div>
                <button
                    onClick={() => setIsVisible(prev => !prev)}
                    style={{padding:'1rem 1.5rem', borderRadius:'.4rem', border:'1px solid #ccc', width:'100px'}}
                >
                    {!isVisible ? 'abrir' : 'cerrar'}
                </button>
                <div className="proyect__grid">
                    {
                        isVisible && (
                            allProyect.map(proyect => (
                                <CardProyect key={i++} proyect={proyect} />
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

