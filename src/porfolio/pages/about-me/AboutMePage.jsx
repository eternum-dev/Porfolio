import { useRef } from 'react';
import { useIntersectionUrlUpdater } from '../../../hooks/useIntersectionUrlUpdater';
import './aboutMePage.css';
import { SectionAbout } from './components/SectionAbout';
import { aboutMe } from '../../../data/aboutme';


export const AboutMePage = () => {

    const aboutRef = useRef();

    useIntersectionUrlUpdater(aboutRef)

    return (
        <div
            id='about'
            ref={aboutRef}
            style={{marginBottom:'2rem'}}
        >
            <h1> {aboutMe.title}</h1>
            <SectionAbout abouts={aboutMe.data} />
        </div>
    )
}


