import { LayoutPorfolio } from '../../layout/LayoutPorfolio';
import { GridProyect } from './components/GridProyect';
import './proyectPage.css';



export const ProyectPage = () => {

    return (
        <LayoutPorfolio >
            <>
                <h1 className="proyect__title">proyect</h1>
                <GridProyect allProyect={arrProyect} />
            </>
        </LayoutPorfolio>
    )
}


const arrProyect = [{
    name: 'ip- address-tracker',
    img: 'src/assets/mocks/ip-address-tracker.png',
    description: `
    Desarrollé 'IP Address Tracker' para Frontend Mentor, una app web que utiliza APIs de geolocalización y mapas para ofrecer información detallada de IPs. Emocionado por futuras mejoras. 🌐🚀`,
    tecnologias: [
        {
            name: 'HTML5'
        },
        {
            name: 'CSS3'
        },
        {
            name: 'JavaScript'
        }
    ]
},
{
    name: 'age calculator',
    img: 'src/assets/mocks/age-calculator.png',
    description: 'Completé el proyecto "Age Calculator" en desarrollo web, usando HTML, CSS y JavaScript. Reforzó mi comprensión y mejoró mis habilidades. Emocionado por avanzar. 🌐🚀',
    tecnologias: [
        {
            name: 'HTML5'
        },
        {
            name: 'CSS3'
        },
        {
            name: 'JavaScript'
        }
    ]
},
{
    name: 'sherter-url',
    img: 'src/assets/mocks/short-url.png',
    description: 'Desarrollé una app web que acorta enlaces eficientemente, priorizando la experiencia mobile-first y la estructura semántica. Destaca mi habilidad para integrar tecnologías externas en un entorno web interactivo. 🚀🔗📱✨',
    tecnologias: [
        {
            name: 'HTML5'
        },
        {
            name: 'CSS3'
        },
        {
            name: 'JavaScript'
        }
    ]
},
{
    name: 'porfolio',
    img: 'src/assets/mocks/porfolio.png',
    description: '🌐 Este es mi portafolio web, donde documentaré mi desarrollo profesional y compartiré todos mis proyectos. ¡Explora y conoce mi trayectoria! 🚀',
    tecnologias: [
        {
            name: 'HTML5',
        },
        {
            name: 'CSS3',
        },
        {
            name: 'JavaScript',
        },
        {
            name: 'react',
        }
    ]
}

]