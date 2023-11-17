import { LayoutPorfolio } from '../../layout/LayoutPorfolio';
import './aboutMePage.css';
import { SectionAbout } from './components/SectionAbout';


export const AboutMePage = () => {
    return (
        <LayoutPorfolio>
            <>
                <h1> AboutMePage</h1>
                <SectionAbout abouts={arrAbout} />

            </>
        </LayoutPorfolio>
    )
}


const arrAbout = [
    {
        name: 'estudios',
        algo: [
            {
                subTitle: 'subtitle',
                descrription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis nesciunt magni error odio accusamus.',
                img: 'algo/algo/algo.png'
            },
            {
                subTitle: 'subtitle',
                descrription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis nesciunt magni error odio accusamus.',
                img: 'algo/algo/algo.png'
            },
            {
                subTitle: 'subtitle',
                descrription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis nesciunt magni error odio accusamus.',
                img: 'algo/algo/algo.png'
            }
        ]
    },
    {
        name: 'personal',
        algo: [
            {
                subTitle: 'subtitle',
                descrription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis nesciunt magni error odio accusamus.',
                img: 'algo/algo/algo.png'
            },
            {
                subTitle: 'subtitle',
                descrription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis nesciunt magni error odio accusamus.',
                img: 'algo/algo/algo.png'
            },
            {
                subTitle: 'subtitle',
                descrription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis nesciunt magni error odio accusamus.',
                img: 'algo/algo/algo.png'
            }
        ]
    }
]