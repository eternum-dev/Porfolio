import { useRef } from 'react';
import { GridProject } from './components/GridProject';
import { useIntersectionUrlUpdater } from '../../../hooks/useIntersectionUrlUpdater';
import { workProject } from '../../../data/projects';
import './projectPage.css';


export const ProjectPage = () => {
    const projectRef = useRef();
    useIntersectionUrlUpdater(projectRef);

    return (
        <div
            id='projects'
            ref={projectRef}
        >
            <h1 className="project__title">{workProject.title}</h1>
            <GridProject />
        </div>
    )
}
