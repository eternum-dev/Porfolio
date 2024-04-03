import { useRef } from 'react';
import { useIntersectionUrlUpdater } from '../../../hooks/useIntersectionUrlUpdater';
import { SectionBotton } from './components/SectionBotton';
import { SectionTop } from './components/SectionTop';
import './homePage.css';


export const HomePage = () => {
    const homeRef = useRef();

    useIntersectionUrlUpdater(homeRef);

    return (
        <div
            id='home'
            ref={homeRef}
        >
            <SectionTop />
            <SectionBotton />
        </div>

    )
}