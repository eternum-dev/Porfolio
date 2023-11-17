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
    img: 'src/assets/mockup-mobil.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione perspiciatis, hic sequi sunt impedit!',
    tecnologias: [
        {
            name: 'html',
            img: '#'
        },
        {
            name: 'css',
            img: '#'
        },
        {
            name: 'javaScrip',
            img: '#'
        },
        {
            name: 'react',
            img: '#'
        },
        {
            name: 'vitest',
            img: '#'
        },
    ]
},
{
    name: 'ip- address-tracker',
    img: 'src/assets/mockup-mobil.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione perspiciatis, hic sequi sunt impedit!',
    tecnologias: [
        {
            name: 'html',
            img: '#'
        },
        {
            name: 'css',
            img: '#'
        },
        {
            name: 'javaScrip',
            img: '#'
        },
        {
            name: 'react',
            img: '#'
        },
        {
            name: 'vitest',
            img: '#'
        },
    ]
},
{
    name: 'ip- address-tracker',
    img: 'src/assets/mockup-mobil.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione perspiciatis, hic sequi sunt impedit!',
    tecnologias: [
        {
            name: 'html',
            img: '#'
        },
        {
            name: 'css',
            img: '#'
        },
        {
            name: 'javaScrip',
            img: '#'
        },
        {
            name: 'react',
            img: '#'
        },
        {
            name: 'vitest',
            img: '#'
        },
    ]
},
{
    name: 'ip- address-tracker',
    img: 'src/assets/mockup-mobil.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione perspiciatis, hic sequi sunt impedit!',
    tecnologias: [
        {
            name: 'html',
            img: '#'
        },
        {
            name: 'css',
            img: '#'
        },
        {
            name: 'javaScrip',
            img: '#'
        },
        {
            name: 'react',
            img: '#'
        },
        {
            name: 'vitest',
            img: '#'
        },
    ]
},
{
    name: 'ip- address-tracker ',
    img: 'src/assets/mockup-mobil.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione perspiciatis, hic sequi sunt impedit!',
    tecnologias: [
        {
            name: 'html',
            img: '#'
        },
        {
            name: 'css',
            img: '#'
        },
        {
            name: 'javaScrip',
            img: '#'
        },
        {
            name: 'react',
            img: '#'
        },
        {
            name: 'vitest',
            img: '#'
        },
    ]
},

]