import { useRef } from 'react';
import { GridProyect } from './components/GridProyect';
import { useIntersectionUrlUpdater } from '../../../hooks/useIntersectionUrlUpdater';
import { workProyect } from '../../../data/projects';
import './proyectPage.css';


export const ProyectPage = () => {
    const proyectRef = useRef();
    useIntersectionUrlUpdater(proyectRef);

    return (
        <div
            id='projects'
            ref={proyectRef}
        >
            <h1 className="proyect__title">{workProyect.title}</h1>
            <GridProyect />
        </div>
    )
}
