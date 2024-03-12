
<<<<<<< HEAD
import { useRef } from 'react';
import { useIntersectionUrlUpdater } from '../../../hooks/useIntersectionUrlUpdater';
=======
>>>>>>> 898b149323e263a1ba0d41fba94dd74beb3a868c
import './aboutMePage.css';
import { SectionAbout } from './components/SectionAbout';


export const AboutMePage = () => {
<<<<<<< HEAD
    const aboutRef = useRef();
    
    useIntersectionUrlUpdater(aboutRef)

    return (
        <div
            id='about'
            ref={aboutRef}
        >
=======
    return (
        <div id='about'>
>>>>>>> 898b149323e263a1ba0d41fba94dd74beb3a868c
            <h1> AboutMePage</h1>
            <SectionAbout abouts={arrAbout} />
        </div>
    )
}


const arrAbout = [
    {
        name: 'estudios',
        contenedor: [
            {
                subTitle: 'analista Programador',
                date: 'inicio de 2019 - 2021',
                descrription: 'Durante mi tiempo en la universidad como estudiante de Analista Programador, adquirí habilidades en HTML, CSS, JavaScript, Java y MySQL. Aunque no pude concluir la carrera, continúo mis estudios de forma autodidacta.',
                centro: 'inacap',
                img: '#'
            },
            {
                subTitle: 'React de 0 a experto',
                date: 'marzo 2023 - julio 2023',
                descrription: 'Este curso te lleva de cero a un nivel competitivo en React, utilizando  Hooks y componentes funcionales. Incluye secciones de pruebas unitarias e integración para componentes, hooks y más.',
                centro: 'udemy',
                img: '#'
            },
            {
                subTitle: 'javaScript Moderno',
                date: 'agosto 2023 - ocubre 2023',
                descrription: 'Estudié un curso de JavaScript moderno para fortalecer mis habilidades en desarrollo web, mejorar mis bases y mantenerme al día con las últimas tendencias tecnológicas',
                centro: 'DevTalles',
                img: '#'
            }
        ]
    },
    {
        name: 'personal',
        contenedor: [
            {
                subTitle: 'basket',
                descrription: 'soy un apacionado por el deporte yuno de mis favoritos es el basketball',
                img: '#'
            },
            {
                subTitle: 'anime, series y documentales',
                descrription: 'desde que tengo recuerdos el contenido multimedia ha sido parte de mi vida, mis tiempos libres son de lo que mas hago.',
                img: '#'
            },
            {
                subTitle: 'juegos',
                descrription: 'otro de mis grandes hobbies es jugar, tanto en el pc como en consolas, lo hago desde que tengo uso de razón',
                img: '#'
            }
        ]
    }
] 