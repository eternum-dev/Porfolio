import { useRef } from 'react';
import { SectionSkill } from './components/SectionSkill';
import './skillsPage.css';
import { useIntersectionUrlUpdater } from '../../../hooks/useIntersectionUrlUpdater';
import { skills } from '../../../data/skills';


export const SkillPage = () => {

    const skillsRef = useRef();
    useIntersectionUrlUpdater(skillsRef);

    return (
        <div
            id='skills'
            ref={skillsRef}
        >
            <h1>{skills.title}</h1>
            {
                skills.arrStack.map(stack => (
                    <SectionSkill key={stack.nameCategory} stack={stack} />
                ))
            }
        </div>
    )
}