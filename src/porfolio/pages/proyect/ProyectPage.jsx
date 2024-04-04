import { useRef } from 'react';
import { GridProyect } from './components/GridProyect';
import { useIntersectionUrlUpdater } from '../../../hooks/useIntersectionUrlUpdater';
import { projects } from '../../../data/projects';
import './proyectPage.css';



export const ProyectPage = () => {
    const proyectRef = useRef();
    useIntersectionUrlUpdater(proyectRef);

    return (
        <div
            id='proyect'
            ref={proyectRef}
        >
            <h1 className="proyect__title">{projects.title}</h1>
            <GridProyect allProyect={projects.arrProjects} />
        </div>
    )
}
