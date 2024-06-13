import { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { alterProjects, workProject } from '../../../../data/projects';
import { Card } from '../../../components/Card';
import './gridProject.css';

let i = 0;

export const GridProject = () => {

    const [isVisible, setIsVisible] = useState(false);


    return (
        <>
            <h2>work</h2>
            <section className="project__grid">
                {
                    workProject.arrProjects.map(project => (
                        <Card
                            key={i++}
                            data={project}
                            isLinked={true} />
                    ))
                }
            </section>

            <h2>Practicas, ejercicios, otros</h2>
            <div className='project__option'>
                <button
                    className='project__btn'
                    onClick={() => setIsVisible(prev => !prev)}
                >
                    {!isVisible ? 'abrir' : 'cerrar'}
                </button>
                <div className="project__grid"
                    style={{ display: !isVisible && 'none' }}
                >
                    {
                        isVisible && (
                            alterProjects.arrProjects.map(project => (
                                <Link key={project.repository} >
                                    <Card
                                        data={project}
                                        isLinked={true} />
                                </Link>

                            ))
                        )
                    }
                </div>
            </div>
        </>

    )
}

GridProject.propTypes = {
    allProject: PropTypes.any
};

