import { CardProyect } from './CardProyect';
import './gridProyect.css';

import PropTypes from 'prop-types';


let i = 0;

export const GridProyect = ({ allProyect }) => {

    return (

        <section className="proyect__grid">
            {
                allProyect.map(proyect => (
                    <CardProyect key={i++} proyect={proyect} />
                ))
            }
        </section>


    )
}

GridProyect.propTypes = {
    allProyect: PropTypes.any
};

