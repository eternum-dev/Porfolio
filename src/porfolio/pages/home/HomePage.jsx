
import { SectionBotton } from './components/SectionBotton';
import { SectionTop } from './components/SectionTop';
import './homePage.css';


export const HomePage = () => {
    const handleScroll = (event) => {
        console.log({ event });
    }
    return (
        <div id='home' onScroll={handleScroll}>
            <SectionTop />
            <SectionBotton />
        </div>

    )
}