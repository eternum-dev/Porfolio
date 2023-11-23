import { LayoutPorfolio } from '../../layout/LayoutPorfolio';
import { SectionSkill } from './components/SectionSkill';
import './skillsPage.css';

const arrStack = [
    {
        nameCategory: 'lenguajes',
        technology: [
            {
                name: 'css',
                icon: 'src/assets/stack-tech-icon/CSS3.svg'
            }, {
                name: 'js',
                icon: 'src/assets/stack-tech-icon/JavaScript.svg'
            },
            {
                name: 'html',
                icon: 'src/assets/stack-tech-icon/HTML5.svg'
            },
            {
                name: 'react',
                icon: 'src/assets/stack-tech-icon/React.svg'
            }
        ]
    },
    {
        nameCategory: 'test',
        technology: [
            {
                name: 'vitest',
                icon: 'src/assets/stack-tech-icon/vitest.svg'
            }, {
                name: 'react testing library',
                icon: 'src/assets/stack-tech-icon/testing-library.svg'
            },
            {
                name: 'jest',
                icon: 'src/assets/stack-tech-icon/Jest.svg'
            },
            {
                name: 'cypress',
                icon: 'src/assets/stack-tech-icon/Cypress.svg'
            }
        ]
    },
    {
        nameCategory: 'dev tools',
        technology: [
            {
                name: 'git',
                icon: 'src/assets/stack-tech-icon/Git.svg'
            }, {
                name: 'github',
                icon: 'src/assets/stack-tech-icon/GitHub.svg'
            },
            {
                name: 'figma',
                icon: 'src/assets/stack-tech-icon/Figma.svg'
            }
        ]
    },
]

export const SkillPage = () => {
    let i = 0
    return (
        <LayoutPorfolio>
            <>
                <h1>skills</h1>
                {
                    arrStack.map(stack => (
                        <SectionSkill key={i++} stack={stack} />
                    ))
                }
            </>

        </LayoutPorfolio>
    )
}