import { useRef } from 'react';
import { GridProyect } from './components/GridProyect';
import { useIntersectionUrlUpdater } from '../../../hooks/useIntersectionUrlUpdater';
import { proyects } from '../../../data/proyects';
import './proyectPage.css';



export const ProyectPage = () => {
    const proyectRef = useRef();
    useIntersectionUrlUpdater(proyectRef);

    return (
        <div
            id='proyect'
            ref={proyectRef}
        >
            <h1 className="proyect__title">{proyects.title}</h1>
            <GridProyect allProyect={proyects.arrProyects} />
        </div>
    )
}
