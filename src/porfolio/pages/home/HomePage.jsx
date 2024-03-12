
<<<<<<< HEAD
import { useRef } from 'react';
import { useIntersectionUrlUpdater } from '../../../hooks/useIntersectionUrlUpdater';
=======
>>>>>>> 898b149323e263a1ba0d41fba94dd74beb3a868c
import { SectionBotton } from './components/SectionBotton';
import { SectionTop } from './components/SectionTop';
import './homePage.css';


export const HomePage = () => {
<<<<<<< HEAD
    const homeRef = useRef();
    useIntersectionUrlUpdater(homeRef);

    return (
        <div
            id='home'
            ref={homeRef}
        >
=======

    return (
        <div id='home' >
>>>>>>> 898b149323e263a1ba0d41fba94dd74beb3a868c
            <SectionTop />
            <SectionBotton />
        </div>

    )
}